'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
    { href: '#hero', key: 'nav.home' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#about', key: 'nav.about' },
    { href: '#contact', key: 'nav.contact' },
];

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <a href="#hero" className="header__logo">
                    Bruno<span className="header__logo-dot">.</span>
                </a>

                <nav className="header__nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="header__link"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {t(link.key)}
                        </a>
                    ))}
                </nav>

                <div className="header__actions">
                    {/* Language Switch */}
                    <div className="header__lang-switch">
                        <button
                            className={`header__lang ${language === 'pt' ? 'header__lang--active' : ''}`}
                            onClick={() => setLanguage('pt')}
                        >
                            PT
                        </button>
                        <span className="header__lang-divider">/</span>
                        <button
                            className={`header__lang ${language === 'en' ? 'header__lang--active' : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </button>
                    </div>

                    <a
                        href="/cv_bruno_meireles.pdf"
                        download
                        className="header__cta"
                    >
                        {t('header.downloadCv')}
                    </a>
                </div>

                <button
                    className={`header__menu-btn ${isMobileMenuOpen ? 'header__menu-btn--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Abrir menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="header__mobile-link"
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {t(link.key)}
                    </a>
                ))}

                {/* Mobile language switch */}
                <div className="header__mobile-lang">
                    <button
                        className={`header__lang ${language === 'pt' ? 'header__lang--active' : ''}`}
                        onClick={() => setLanguage('pt')}
                    >
                        Português
                    </button>
                    <button
                        className={`header__lang ${language === 'en' ? 'header__lang--active' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        English
                    </button>
                </div>

                <a
                    href="/cv_bruno_meireles.pdf"
                    download
                    className="header__mobile-cta"
                >
                    {t('header.downloadCv')}
                </a>
            </div>
        </header>
    );
}
