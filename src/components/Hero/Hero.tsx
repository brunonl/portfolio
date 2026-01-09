'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = hero.getBoundingClientRect();
            const x = ((clientX - left) / width) * 100;
            const y = ((clientY - top) / height) * 100;

            hero.style.setProperty('--mouse-x', `${x}%`);
            hero.style.setProperty('--mouse-y', `${y}%`);
        };

        hero.addEventListener('mousemove', handleMouseMove);
        return () => hero.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleScroll = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={heroRef} className={styles.hero} id="hero">
            <div className={styles.hero__background}>
                <div className={styles.hero__gradient}></div>
                <div className={styles.hero__grid}></div>
                <div className={styles.hero__glow}></div>
            </div>

            <div className={styles.hero__container}>
                <div className={styles.hero__content}>
                    <div className={styles.hero__badge}>
                        <span className={styles.hero__badgeDot}></span>
                        Disponível para novos projetos
                    </div>

                    <h1 className={styles.hero__title}>
                        Bruno <span className={styles.hero__titleAccent}>Meireles</span>
                    </h1>

                    <p className={styles.hero__role}>
                        Senior Software Engineer - <span>Frontend</span>
                    </p>

                    <p className={styles.hero__description}>
                        +10 anos criando soluções digitais de impacto nacional.
                        Especialista em React, Next.js e arquiteturas frontend escaláveis.
                    </p>

                    <div className={styles.hero__actions}>
                        <button
                            className={styles.hero__btnPrimary}
                            onClick={() => handleScroll('#projects')}
                        >
                            Ver Projetos
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            className={styles.hero__btnOutline}
                            onClick={() => handleScroll('#contact')}
                        >
                            Entrar em Contato
                        </button>
                    </div>

                    <div className={styles.hero__stats}>
                        <div className={styles.hero__stat}>
                            <span className={styles.hero__statNumber}>10+</span>
                            <span className={styles.hero__statLabel}>Anos de Experiência</span>
                        </div>
                        <div className={styles.hero__stat}>
                            <span className={styles.hero__statNumber}>25M+</span>
                            <span className={styles.hero__statLabel}>Views/mês (Portal O Tempo)</span>
                        </div>
                        <div className={styles.hero__stat}>
                            <span className={styles.hero__statNumber}>15+</span>
                            <span className={styles.hero__statLabel}>Clientes Atendidos</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.hero__scrollIndicator}>
                <div className={styles.hero__mouse}>
                    <div className={styles.hero__wheel}></div>
                </div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
