'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
    const { translate } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    entries[0].target.classList.add('about--visible');
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="about" id="about">
            <div className="about__container">
                <div className="about__header">
                    <h2 className="about__title">
                        {translate('about.title')} <span>{translate('about.titleAccent')}</span>
                    </h2>
                </div>

                <div className="about__content">
                    <p className="about__text">
                        {translate('about.text1')}
                    </p>

                    <p className="about__text">
                        {translate('about.text2')}
                    </p>

                    <div className="about__actions">
                        <a
                            href="/cv_bruno_meireles.pdf"
                            download
                            className="btn btn-primary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            {translate('header.downloadCv')}
                        </a>
                        <a
                            href="https://linkedin.com/in/brunomeireles"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

