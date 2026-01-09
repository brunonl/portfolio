'use client';

import imageProfile from '../../../public/images/profile.jpg';
import Image from 'next/image';
import styles from './About.module.scss';
import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['about--visible']);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.about} id="about">
            <div className={styles.about__container}>
                <div className={styles.about__grid}>
                    <div className={styles.about__imageWrapper}>
                        <div className={styles.about__imageFrame}>
                            <Image
                                src={imageProfile}
                                alt="Bruno Meireles"
                                width={400}
                                height={400}
                                className={styles.about__image}
                            />
                        </div>
                        <div className={styles.about__badge}>
                            <span>🇧🇷</span> Brasileiro
                        </div>
                        <div className={styles.about__badge} style={{ top: 'auto', bottom: '20px', left: '-20px', right: 'auto' }}>
                            <span>📍</span> Nova Lima - MG
                        </div>
                    </div>

                    <div className={styles.about__content}>
                        <h2 className={styles.about__title}>
                            Sobre <span>Mim</span>
                        </h2>

                        <p className={styles.about__text}>
                            Senior Frontend Engineer com mais de 10 anos de experiência e formação em Ciência da Computação.
                            Movido por desafios técnicos e inovação, atuei em projetos estratégicos para empresas como Cemig,
                            Caixa Econômica Federal e Portal O Tempo.
                        </p>

                        <p className={styles.about__text}>
                            Experiência internacional com inglês avançado (B2) e intercâmbio em Malta (UE). Especialista em
                            liderança técnica, React, Next.js e performance web.
                        </p>

                        <div className={styles.about__highlights}>
                            <div className={styles.highlight}>
                                <span className={styles.highlight__icon}>📚</span>
                                <div>
                                    <h4>Publicação Científica</h4>
                                    <p>Engenharia Semiótica Aplicada em Simulador de Casos Clínicos (CBIS 2016)</p>
                                </div>
                            </div>

                            <div className={styles.highlight}>
                                <span className={styles.highlight__icon}>🎓</span>
                                <div>
                                    <h4>Formação Acadêmica</h4>
                                    <p>Ciência da Computação (UniBH, 2017)</p>
                                </div>
                            </div>
                        </div>

                        <a href="/cv_bruno_meireles.pdf" download className={styles.about__btn}>
                            Download CV
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
