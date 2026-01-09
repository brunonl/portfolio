'use client';

import { useEffect, useRef } from 'react';
import { experiences } from '@/data/experience';
import styles from './Timeline.module.scss';
import Image from 'next/image';

export default function Timeline() {
    const lineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles['timeline-item--visible']);
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        // Animate line
        const lineObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && lineRef.current) {
                    lineRef.current.classList.add(styles['timeline__line--visible']);
                }
            },
            { threshold: 0.1 }
        );

        if (lineRef.current) lineObserver.observe(lineRef.current);

        return () => {
            observer.disconnect();
            lineObserver.disconnect();
        };
    }, []);

    return (
        <section className={styles.timeline} id="experience">
            <div className={styles.timeline__container}>
                <h2 className={styles.timeline__title}>
                    Trajetória <span>Profissional</span>
                </h2>
                <p className={styles.timeline__subtitle}>
                    Uma jornada de evolução técnica e liderança em projetos desafiadores.
                </p>

                <div className={styles.timeline__wrapper}>
                    <div ref={lineRef} className={styles.timeline__line}></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className={`${styles['timeline-item']} ${index % 2 === 0 ? styles['timeline-item--left'] : styles['timeline-item--right']}`}
                        >
                            <div className={styles['timeline-item__content']}>
                                <div className={styles['timeline-item__header']}>
                                    <h3 className={styles['timeline-item__role']}>{exp.role}</h3>
                                    <span className={styles['timeline-item__company']}>{exp.company}</span>
                                    <span className={styles['timeline-item__period']}>{exp.period}</span>
                                </div>

                                <p className={styles['timeline-item__description']}>{exp.description}</p>

                                <ul className={styles['timeline-item__highlights']}>
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles['timeline-item__dot']}>
                                <div className={styles['timeline-item__dot-inner']}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
