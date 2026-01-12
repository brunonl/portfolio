'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/data/experience';

export default function Timeline() {
    const { t } = useLanguage();
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('timeline__item--visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    // Show only last 3 experiences
    const recentExperiences = experiences.slice(0, 3);

    return (
        <section className="timeline" id="experience">
            <div className="timeline__container">
                <div className="timeline__header">
                    <h2 className="timeline__title">
                        {t('experience.title')} <span>{t('experience.titleAccent')}</span>
                    </h2>
                    <p className="timeline__subtitle">
                        {t('experience.subtitle')}
                    </p>
                </div>

                <div className="timeline__list">
                    {recentExperiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className="timeline__item"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <span className="timeline__period">{exp.period}</span>
                            <h3 className="timeline__role">{t(exp.role)}</h3>
                            <p className="timeline__company">
                                @ <a href="#" target="_blank" rel="noopener noreferrer">{exp.company}</a>
                            </p>
                            <p className="timeline__description">{t(exp.description)}</p>
                        </div>
                    ))}
                </div>

                <div className="timeline__footer">
                    <p className="timeline__linkedin">
                        {t('experience.linkedinCta')}{' '}
                        <a
                            href="https://linkedin.com/in/brunomeireles"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
