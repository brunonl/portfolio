'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from './Projects.module.scss';

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles['project-card--visible']);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.projects} id="projects">
            <div className={styles.projects__container}>
                <h2 className={styles.projects__title}>
                    Projetos <span>Selecionados</span>
                </h2>
                <p className={styles.projects__subtitle}>
                    Uma seleção de trabalhos que demonstram minha experiência em criar interfaces modernas e funcionais.
                </p>

                <div className={styles.projects__grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className={styles['project-card']}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles['project-card__image-wrapper']}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles['project-card__image']}
                                />
                                <div className={styles['project-card__overlay']}>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles['project-card__link']}
                                    >
                                        Ver Projeto
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className={styles['project-card__content']}>
                                <span className={styles['project-card__category']}>{project.category}</span>
                                <h3 className={styles['project-card__title']}>{project.title}</h3>
                                <p className={styles['project-card__description']}>{project.description}</p>

                                <div className={styles['project-card__stack']}>
                                    {project.stack.map((tech) => (
                                        <span key={tech} className={styles['project-card__tech']}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
