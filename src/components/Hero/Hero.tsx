'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
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
        <section ref={heroRef} className="hero" id="hero">
            {/* Background effects */}
            <div className="hero__background">
                <div className="hero__grid"></div>
                <div className="hero__gradient"></div>
                <div className="hero__blur"></div>
            </div>

            {/* Floating particles */}
            <div className="hero__particles">
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
                <div className="hero__particle"></div>
            </div>

            <div className="hero__container">
                {/* Content */}
                <div className="hero__content">
                    <span className="hero__label">{t('hero.label')}</span>

                    <p className="hero__greeting">{t('hero.greeting')}</p>

                    <h1 className="hero__name">
                        Bruno Meireles<span className="hero__cursor"></span>
                    </h1>

                    <p className="hero__description">
                        {t('hero.description')}
                    </p>

                    <div className="hero__actions">
                        <a
                            href="/cv_bruno_meireles.pdf"
                            download
                            className="hero__btn hero__btn--primary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            {t('header.downloadCv')}
                        </a>

                        <div className="hero__socials">
                            <a
                                href="https://github.com/brunonl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero__social"
                                aria-label="GitHub"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/brunomeireles"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero__social"
                                aria-label="LinkedIn"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:brunik56@hotmail.com"
                                className="hero__social"
                                aria-label="Email"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Photo with animated circle */}
                <div className="hero__image-wrapper">
                    <div className="hero__image-container">
                        <div className="hero__circle"></div>
                        <div className="hero__circle-glow"></div>
                        <Image
                            src="/images/bruno-meireles.png"
                            alt="Bruno Meireles"
                            width={400}
                            height={400}
                            priority
                            className="hero__image"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                className="hero__scroll"
                onClick={() => handleScroll('#projects')}
                aria-label="Scroll para projetos"
            >
                <div className="hero__scroll-mouse"></div>
                <span>Scroll</span>
            </button>
        </section>
    );
}
