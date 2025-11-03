
import React, { useState, useEffect, useRef } from 'react';
import { NAME, TITLE, SUMMARY, CONTACT, SKILL_CATEGORIES, WORK_EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS } from './constants';
import type { WorkExperience, Project, Education as EducationType, Certification } from './types';
import { GitHubIcon, LinkedInIcon, MailIcon, SunIcon, MoonIcon } from './components/icons';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
    <div className="flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium leading-5 text-amber-700 dark:text-amber-300">
        {skill}
    </div>
);

const ExperienceCard: React.FC<{ experience: WorkExperience }> = ({ experience }) => (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-200/50 dark:lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2" aria-label={experience.period}>{experience.period}</header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-neutral-800 dark:text-neutral-200">
                <div>
                    <span className="inline-block font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{experience.role} · {experience.company}</span>
                </div>
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-normal">
                {experience.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>
            <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                {experience.skills.map((skill, i) => (
                    <li key={i} className="mr-1.5 mt-2"><SkillPill skill={skill} /></li>
                ))}
            </ul>
        </div>
    </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
     <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-200/50 dark:lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:col-span-8">
            <h3 className="font-medium leading-snug text-neutral-800 dark:text-neutral-200">
                <span className="inline-block font-bold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{project.name}</span>
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-normal">
                {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>
            <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                {project.skills.map((skill, i) => (
                    <li key={i} className="mr-1.5 mt-2"><SkillPill skill={skill} /></li>
                ))}
            </ul>
        </div>
    </div>
);

const Section: React.FC<{id: string, title: string, children: React.ReactNode}> = ({ id, title, children }) => (
    <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h2 className="sticky top-0 z-20 -mx-6 w-screen bg-neutral-50/75 px-6 py-5 backdrop-blur dark:bg-neutral-950/75 md:-mx-12 md:px-12 lg:sr-only">
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-200">{title}</span>
        </h2>
        {children}
    </section>
);


export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as 'light' | 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const canvas = document.getElementById('background-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particlesArray: Particle[];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    const particleColor = theme === 'dark' ? '#fcd34d' : '#374151'; // amber-300, gray-700
    const lineColorRGB = theme === 'dark' ? '59, 130, 246' : '251, 191, 36'; // blue-500, amber-500

    class Particle {
        x: number;
        y: number;
        directionX: number;
        directionY: number;
        size: number;

        constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
        }

        draw() {
            if(!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = particleColor;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 11000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 1.5) + 1;
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            particlesArray.push(new Particle(x, y, directionX, directionY, size));
        }
    }

    function connect() {
        if(!ctx) return;
        const connectDistance = 120;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectDistance) {
                    const opacity = 1 - (distance / connectDistance);
                    ctx.strokeStyle = `rgba(${lineColorRGB}, ${opacity * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    let animationFrameId: number;
    function animate() {
        if(!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
        resizeCanvas();
        init();
    }
    
    resizeCanvas();
    init();
    animate();
    
    window.addEventListener('resize', handleResize);

    return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
    }
}, [theme]);


  const handleThemeToggle = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
  ];

  const mailtoHref = `mailto:${CONTACT.email}?subject=Portfolio Contact - ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;


  return (
    <div className="leading-relaxed text-neutral-600 dark:text-neutral-400 antialiased selection:bg-amber-400 selection:text-amber-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">{NAME}</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-amber-600 dark:text-amber-400 sm:text-xl">{TITLE}</h2>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                  <ul className="mt-16 w-max">
                      {navLinks.map(({id, title}) => (
                           <li key={id}>
                              <a className="group flex items-center py-3 active" href={`#${id}`}>
                                  <span className="nav-indicator mr-4 h-px w-8 bg-neutral-400 transition-all group-hover:w-16 group-hover:bg-amber-500 dark:bg-neutral-600 dark:group-hover:bg-amber-400 group-focus-visible:w-16 group-focus-visible:bg-amber-400 motion-reduce:transition-none"></span>
                                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-amber-600 dark:group-hover:text-neutral-200 group-focus-visible:text-neutral-200">{title}</span>
                              </a>
                          </li>
                      ))}
                  </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
               <li className="mr-5 shrink-0">
                    <button
                        onClick={handleThemeToggle}
                        className="block text-neutral-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        <span className="sr-only">Switch theme</span>
                        {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
                    </button>
                </li>
              <li className="mr-5 shrink-0">
                <a className="block text-neutral-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400" href={CONTACT.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <span className="sr-only">GitHub</span>
                  <GitHubIcon className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 shrink-0">
                <a className="block text-neutral-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400" href={CONTACT.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon className="h-6 w-6" />
                </a>
              </li>
               <li className="mr-5 shrink-0">
                <a className="block text-neutral-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400" href={`mailto:${CONTACT.email}`} aria-label="Email">
                  <span className="sr-only">Email</span>
                  <MailIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <Section id="about" title="About">
              <FadeIn>
                <p>{SUMMARY}</p>
              </FadeIn>
            </Section>

            <Section id="experience" title="Experience">
               <div className="flex flex-col gap-12 group/list">
                  {WORK_EXPERIENCE.map((exp, i) => (
                    <FadeIn key={i} delay={i * 100}>
                      <ExperienceCard experience={exp} />
                    </FadeIn>
                  ))}
               </div>
            </Section>

            <Section id="projects" title="Projects">
               <div className="flex flex-col gap-12 group/list">
                  {PROJECTS.map((proj, i) => (
                    <FadeIn key={i} delay={i * 100}>
                      <ProjectCard project={proj} />
                    </FadeIn>
                  ))}
               </div>
            </Section>

            <Section id="skills" title="Skills">
                <div className="flex flex-col gap-6">
                    {SKILL_CATEGORIES.map((category, i) => (
                        <FadeIn key={category.name} delay={i * 100}>
                            <div>
                                <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">{category.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => <SkillPill key={skill} skill={skill} />)}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>
            
            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h2 className="sticky top-0 z-20 -mx-6 w-screen bg-neutral-50/75 px-6 py-5 backdrop-blur dark:bg-neutral-950/75 md:-mx-12 md:px-12 lg:sr-only">
                    <span className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-200">Education & Certifications</span>
                </h2>
                <div className="space-y-8">
                    <FadeIn>
                        <div>
                            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Education</h3>
                            <div className="mt-4 space-y-4">
                                {EDUCATION.map((edu, i) => (
                                    <div key={i}>
                                        <p className="font-medium text-neutral-700 dark:text-neutral-300">{edu.degree}, {edu.field}</p>
                                        <p className="text-sm ">{edu.institution}</p>
                                        <p className="text-xs text-neutral-500">{edu.period}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                     <FadeIn delay={100}>
                        <div>
                            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Certifications & Achievements</h3>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {CERTIFICATIONS.map((cert, i) => (
                                    <div key={i} className="bg-white p-4 rounded-md border border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-800">
                                        <p className="font-medium text-neutral-700 dark:text-neutral-300">{cert.name}</p>
                                        <p className="text-sm">{cert.issuer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
            
            <Section id="contact" title="Get In Touch">
                <FadeIn>
                    <p className="mb-6">
                        I'm open to discussing new opportunities and creative ideas. Feel free to send me a message.
                    </p>
                </FadeIn>
                <form className="space-y-4">
                    <FadeIn delay={100}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-md border-0 bg-white dark:bg-neutral-800/50 py-1.5 text-neutral-900 dark:text-neutral-200 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 transition"
                            />
                        </div>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 bg-white dark:bg-neutral-800/50 py-1.5 text-neutral-900 dark:text-neutral-200 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 transition"
                            />
                        </div>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-800 dark:text-neutral-300 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4} 
                                required 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="block w-full rounded-md border-0 bg-white dark:bg-neutral-800/50 py-1.5 text-neutral-900 dark:text-neutral-200 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 transition"
                            ></textarea>
                        </div>
                    </FadeIn>
                    <FadeIn delay={400}>
                         <a 
                            href={mailtoHref}
                            className="inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-colors hover:bg-amber-600 dark:hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                        >
                            Send Message
                        </a>
                    </FadeIn>
                </form>
            </Section>

            <FadeIn>
                 <footer className="max-w-md pb-16 text-sm text-neutral-500 sm:pb-0">
                    <p>
                        Coded with passion using React and Tailwind CSS. Designed by Subodh Verma.
                    </p>
                </footer>
            </FadeIn>
          </main>
        </div>
      </div>
    </div>
  );
}