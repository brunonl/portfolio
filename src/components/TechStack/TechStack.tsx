'use client';

import { useEffect, useRef } from 'react';
import { skillCategories } from '@/data/skills';
import styles from './TechStack.module.scss';

const categoryIcons: Record<string, JSX.Element> = {
    'frontend-core': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    'frameworks': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
        </svg>
    ),
    'quality': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    ),
    'devops': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    ),
};

export default function TechStack() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles['skill-card--visible']);
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
        <section className={styles.techstack} id="skills">
            <div className={styles.techstack__container}>
                <h2 className={styles.techstack__title}>
                    Tech <span>Stack</span>
                </h2>
                <p className={styles.techstack__subtitle}>
                    Ecossistema de ferramentas selecionadas para entregar performance, escalabilidade e experiência excepcional.
                </p>

                <div className={styles.techstack__grid}>
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.id}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className={styles['skill-card']}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles['skill-card__icon']}>
                                {categoryIcons[category.id]}
                            </div>

                            <h3 className={styles['skill-card__title']}>{category.title}</h3>
                            <p className={styles['skill-card__description']}>{category.description}</p>

                            <div className={styles['skill-card__skills']}>
                                {category.skills.map((skill) => (
                                    <span key={skill} className={styles['skill-card__skill']}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
