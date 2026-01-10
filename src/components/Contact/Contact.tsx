'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, open email client with pre-filled data
        const subject = encodeURIComponent(`Contato do Portfólio - ${formData.name}`);
        const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
        window.location.href = `mailto:brunik56@hotmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__title">
                    Vamos <span>Conversar</span>
                </h2>
                <p className="contact__subtitle">
                    Tem um projeto em mente? Entre em contato e vamos transformar ideias em realidade.
                </p>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__field">
                        <label htmlFor="name" className="contact__label">Nome</label>
                        <input
                            type="text"
                            id="name"
                            className="contact__input"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="email" className="contact__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="contact__input"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="message" className="contact__label">Mensagem</label>
                        <textarea
                            id="message"
                            className="contact__textarea"
                            placeholder="Conte-me sobre seu projeto..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="contact__btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22,2 15,22 11,13 2,9" />
                        </svg>
                        Enviar Mensagem
                    </button>
                </form>

                <div className="contact__info">
                    <p className="contact__info-text">Ou entre em contato diretamente:</p>
                    <a href="mailto:brunik56@hotmail.com" className="contact__email">
                        brunik56@hotmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}
