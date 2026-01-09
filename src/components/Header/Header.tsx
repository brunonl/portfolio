'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const navLinks = [
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experiência' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
            <div className={styles.header__container}>
                <a href="#" className={styles.header__logo}>
                    <span className={styles.header__logoAccent}>B</span>runo
                    <span className={styles.header__logoDot}>.</span>
                </a>

                <nav className={`${styles.header__nav} ${isMobileMenuOpen ? styles['header__nav--open'] : ''}`}>
                    <ul className={styles.header__navList}>
                        {navLinks.map((link) => (
                            <li key={link.href} className={styles.header__navItem}>
                                <a
                                    href={link.href}
                                    className={styles.header__navLink}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`${styles.header__menuBtn} ${isMobileMenuOpen ? styles['header__menuBtn--open'] : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
