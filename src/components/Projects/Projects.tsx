'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data';
import type { Project } from '@/types';

export default function Projects() {
    const { translate } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('project-card--visible');
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

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // Reset carousel to first image
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = '';
    };

    // Autoplay carousel (5 seconds interval)
    useEffect(() => {
        if (!selectedProject?.images || selectedProject.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images!.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedProject]);

    const nextImage = () => {
        if (!selectedProject?.images) return;
        setCurrentImageIndex((prev) =>
            prev === selectedProject.images!.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        if (!selectedProject?.images) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProject.images!.length - 1 : prev - 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <section className="projects" id="projects">
                <div className="projects__container">
                    <div className="projects__header">
                        <h2 className="projects__title">
                            {translate('projects.title')} <span>{translate('projects.titleAccent')}</span>
                        </h2>
                        <p className="projects__subtitle">
                            {translate('projects.subtitle')}
                        </p>
                    </div>

                    <div className="projects__grid">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => { cardsRef.current[index] = el; }}
                                className="project-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => openModal(project)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        openModal(project);
                                    }
                                }}
                            >
                                <div className="project-card__image-wrapper">
                                    <Image
                                        src={project.image}
                                        alt={translate(project.title)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="project-card__image"
                                    />
                                </div>

                                <div className="project-card__content">
                                    <span className="project-card__category">{project.category}</span>
                                    <h3 className="project-card__title">{translate(project.title)}</h3>
                                    <p className="project-card__description">{translate(project.description)}</p>

                                    <div className="project-card__stack">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="badge">{tech}</span>
                                        ))}
                                    </div>

                                    <button className="btn btn-primary-outline project-card__details-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                        {translate('projects.viewDetails')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal - Side by Side Layout */}
            <div
                className={`modal ${selectedProject ? 'modal--open' : ''}`}
                onClick={closeModal}
            >
                <div className="modal__backdrop"></div>
                {selectedProject && (
                    <div
                        className="modal__content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal__close"
                            onClick={closeModal}
                            aria-label="Fechar modal"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left: Image or Carousel */}
                        <div className="modal__image-wrapper">
                            {selectedProject.images && selectedProject.images.length > 1 ? (
                                // Carousel for multiple images
                                <>
                                    <Image
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                                        fill
                                        sizes="500px"
                                        className="modal__image"
                                        priority
                                    />

                                    {/* Previous Arrow */}
                                    <button
                                        className="modal__carousel-arrow modal__carousel-arrow--prev"
                                        onClick={prevImage}
                                        aria-label="Imagem anterior"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>

                                    {/* Next Arrow */}
                                    <button
                                        className="modal__carousel-arrow modal__carousel-arrow--next"
                                        onClick={nextImage}
                                        aria-label="Próxima imagem"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="modal__carousel-dots">
                                        {selectedProject.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`modal__carousel-dot ${index === currentImageIndex ? 'modal__carousel-dot--active' : ''}`}
                                                onClick={() => goToImage(index)}
                                                aria-label={`Ir para imagem ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                // Single image for projects without carousel
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    sizes="500px"
                                    className="modal__image"
                                />
                            )}
                        </div>

                        {/* Right: Content + Footer */}
                        <div className="modal__right">
                            <div className="modal__body">
                                <span className="modal__category">{selectedProject.category}</span>
                                <h3 className="modal__title">{translate(selectedProject.title)}</h3>
                                <p className="modal__description">{translate(selectedProject.fullDescription)}</p>

                                <div className="modal__stack">
                                    <h4>{translate('projects.technologies')}</h4>
                                    <div className="modal__tech-list">
                                        {selectedProject.stack.map((tech) => (
                                            <span key={tech} className="badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer with actions */}
                            <div className="modal__footer">
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                            <polyline points="15,3 21,3 21,9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        {translate('projects.accessProject')}
                                    </a>
                                )}
                                {selectedProject.repoUrl && (
                                    <a
                                        href={selectedProject.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        {translate('projects.accessRepo')}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

