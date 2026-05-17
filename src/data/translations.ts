// ============================================
// Translations Data - Bruno Meireles Portfolio
// ============================================

import type { Translations } from '@/types';

export const translations: Translations = {
    pt: {
        // Header
        'nav.home': 'Home',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.about': 'Sobre',
        'nav.contact': 'Contato',
        'header.downloadCv': 'Download CV',

        // Hero
        'hero.greeting': 'Olá, eu sou',
        'hero.label': 'Desenvolvedor Frontend',
        'hero.description': '+10 anos criando experiências digitais de impacto, com atuação em diversas stacks e tecnologias.',
        'hero.viewProjects': 'Ver Projetos',

        // Projects
        'projects.title': 'Projetos',
        'projects.titleAccent': 'Selecionados',
        'projects.subtitle': 'Uma seleção de trabalhos que demonstram minha experiência em criar interfaces modernas e funcionais.',
        'projects.viewDetails': 'Ver Detalhes',
        'projects.accessProject': 'Ver Projeto',
        'projects.accessRepo': 'Ver Código',
        'projects.technologies': 'Tecnologias',

        // Projects Data
        'project.microscopia.title': 'Centro de Microscopia UFMG',
        'project.microscopia.description': 'Portal responsivo desenvolvido para o Workshop Internacional de Microscopia Eletrônica da UFMG.',
        'project.microscopia.fullDescription': 'Desenvolvimento front-end da landing page oficial para o \'Workshop on Electron Microscopy Cryo-techniques\', promovido pelo Centro de Microscopia da UFMG. O projeto destaca-se pela estruturação semântica (HTML5) e acessibilidade, utilizando Bootstrap para uma interface totalmente responsiva. Inclui integração com mapas interativos (Leaflet), cronograma dinâmico de palestras e otimização para SEO e performance.',

        'project.audicenterbh.title': 'Audi Center BH',
        'project.audicenterbh.description': 'Participação no desenvolvimento do portal institucional da Audi Center BH seguindo o Design System global da marca.',
        'project.audicenterbh.fullDescription': 'Participação na implementação front-end do portal institucional da Audi Center Belo Horizonte. O projeto exigiu aderência rigorosa ao Audi Corporate Identity (CI), seguindo fielmente o Styleguide global da marca. Desenvolvido anteriormente à padronização em React da montadora, o desafio consistiu em desenvolver uma interface fiel aos padrões visuais da Audi. A solução entregou uma experiência responsiva com validação rigorosa de tipografia e grids, garantindo a consistência visual exigida por uma das mais conceituadas marcas premium do setor automotivo.',

        'project.lanformation.title': 'Lanformation',
        'project.lanformation.description': 'Site institucional desenvolvido para empresa de serviços e soluções de TI de Nova Lima.',
        'project.lanformation.fullDescription': 'Desenvolvimento front-end do portal institucional da Lanformation, empresa especializada em locação de mão de obra de TI (Body Shop), manutenção de equipamentos e infraestrutura tecnológica. O site foi projetado para transmitir credibilidade e profissionalismo, com seções claras de serviços, depoimentos de clientes e métricas de resultados. A interface responsiva utiliza animações sutis de scroll para engajar o usuário e destacar os diferenciais da empresa.',

        'project.clinical-simulator.title': 'Clinical Case Simulator',
        'project.clinical-simulator.description': 'Simulador médico imersivo desenvolvido com Next.js para treinamento de diagnóstico. Apresenta arquitetura robusta com testes automatizados (QA), Design System documentado e interface responsiva de alta fidelidade com suporte mobile otimizado.',
        'project.clinical-simulator.fullDescription': 'Plataforma de simulação clínica que oferece experiência imersiva Mobile-First para análise de casos reais, interpretação de exames e tomada de decisões diagnósticas. Implementa cultura de QA com testes automatizados (Jest + RTL), Design System via Storybook, autenticação segura (Supabase RLS) e renderização SSR (Server-Side Rendering) para performance otimizada.',

        'project.skyboard.title': 'Skyboard',
        'project.skyboard.description': 'SPA (Single Page Application) de gestão de tarefas estilo Kanban, focada em arquitetura limpa, Angular 19 e persistência em tempo real via Supabase.',
        'project.skyboard.fullDescription': 'Aplicação Kanban desenvolvida com Angular 19, focada em Clean Architecture e experiência do usuário premium. Implementa interface Dark Mode responsiva, persistência em tempo real com Supabase (PostgreSQL), funcionalidade Drag-and-Drop e CI/CD automatizado via GitHub Actions. A arquitetura segue Service Layer Pattern para código escalável e testável.',

        'project.portfolio.title': 'Portfolio Pessoal',
        'project.portfolio.description': 'Portfolio profissional desenvolvido com Next.js, React, TypeScript e SCSS, apresentando arquitetura modular (BEM) e design premium responsivo.',
        'project.portfolio.fullDescription': 'Portfolio desenvolvido com Next.js, React, TypeScript e SCSS modular (metodologia BEM). O projeto segue princípios de Clean Code e Clean Architecture, utilizando Custom Hooks para abstração de lógica. Implementa sistema de internacionalização (i18n) para suporte PT/EN, design responsivo premium e renderização SSG (Static Site Generation) para máxima performance e SEO. A estrutura modular garante manutenibilidade e escalabilidade.',

        // Experience
        'experience.title': 'Experiência',
        'experience.titleAccent': 'Recente',
        'experience.subtitle': 'Minhas últimas experiências profissionais.',
        'experience.linkedinCta': 'Veja minha trajetória completa no meu',

        // Experience Data
        'experience.bhs-senior.role': 'Desenvolvedor Frontend Sênior',
        'experience.bhs-senior.description': 'Liderança técnica no projeto Cemig SIM (App React Native + Web Next.js). Implementação de testes E2E com Cypress, CI/CD com GitHub Actions, e mentoria de desenvolvedores.',

        'experience.bhs-middle.role': 'Desenvolvedor Frontend Pleno',
        'experience.bhs-middle.description': 'Refatoração de sistemas legados com Angular. Atuação híbrida como Dev + UI/UX Designer, criando protótipos e melhorando usabilidade.',

        'experience.alpes.role': 'Desenvolvedor Frontend',
        'experience.alpes.description': 'Responsável técnico pelo setor de Frontend. Liderança de equipe com mentoria de estagiário. Sites de alta performance para Audi Center BH, Strada Jeep e Fiat.',

        // About
        'about.title': 'Sobre',
        'about.titleAccent': 'Mim',
        'about.text1': 'Desenvolvedor com mais de 10 anos de experiência em Frontend, formado em Ciência da Computação (UniBH, 2017) e com intercâmbio de inglês em Malta concluído em 2024 (B2).',
        'about.text2': 'Atuei em projetos para empresas como Cemig, Caixa Econômica Federal, BDMG, Sebrae e UFMG. Experiência em liderança técnica, mentoria de desenvolvedores e ambientes Scrum.',

        // Contact
        'contact.title': 'Contatos',
        'contact.subtitle': 'Estou disponível para novas oportunidades. Entre em contato!',
        'contact.whatsappLabel': 'WhatsApp',
        'contact.whatsappAction': 'Chamar',
        'contact.emailLabel': 'E-mail',
        'contact.emailAction': 'Enviar',
        'contact.linkedinLabel': 'LinkedIn',
        'contact.linkedinAction': 'Conectar',
        'contact.form.name': 'Nome',
        'contact.form.namePlaceholder': 'Seu nome',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'seu@email.com',
        'contact.form.message': 'Mensagem',
        'contact.form.messagePlaceholder': 'Conte-me sobre seu projeto...',
        'contact.form.send': 'Enviar Mensagem',
        'contact.or': 'Ou entre em contato diretamente:',
        'contact.whatsapp': 'Chamar no WhatsApp',
    },
    en: {
        // Header
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'header.downloadCv': 'Download CV',

        // Hero
        'hero.greeting': 'Hi, I am',
        'hero.label': 'Frontend Developer',
        'hero.description': '+10 years build impactful digital experiences, working with various stacks and technologies.',
        'hero.viewProjects': 'View Projects',

        // Projects
        'projects.title': 'Selected',
        'projects.titleAccent': 'Projects',
        'projects.subtitle': 'A selection of work showcasing my experience in building modern, functional interfaces.',
        'projects.viewDetails': 'View Details',
        'projects.accessProject': 'Live Demo',
        'projects.accessRepo': 'Source Code',
        'projects.technologies': 'Technologies',

        // Projects Data
        'project.microscopia.title': 'UFMG Microscopy Center',
        'project.microscopia.description': 'Responsive portal developed for the UFMG International Workshop on Electron Microscopy.',
        'project.microscopia.fullDescription': 'Front-end development of the official landing page for the \'Workshop on Electron Microscopy Cryo-techniques\', hosted by the UFMG Microscopy Center. The project stands out for its semantic structure (HTML5) and accessibility, using Bootstrap for a fully responsive interface. It includes integration with interactive maps (Leaflet), dynamic speaker schedule, and SEO and performance optimization.',

        'project.audicenterbh.title': 'Audi Center BH',
        'project.audicenterbh.description': 'Participation in the development of the Audi Center BH institutional portal following the brand\'s global Design System.',
        'project.audicenterbh.fullDescription': 'Participation in the front-end implementation of the Audi Center Belo Horizonte institutional portal. The project required strict adherence to Audi Corporate Identity (CI), faithfully following the brand\'s global Styleguide. Developed before the automaker\'s React standardization, the challenge was to develop an interface true to Audi\'s visual standards. The solution delivered a responsive experience with rigorous typography and grid validation, ensuring the visual consistency required by one of the most renowned premium brands in the automotive sector.',

        'project.lanformation.title': 'Lanformation',
        'project.lanformation.description': 'Institutional website developed for an IT services and solutions company in Nova Lima.',
        'project.lanformation.fullDescription': 'Front-end development of the Lanformation institutional portal, a company specializing in IT staffing (Body Shop), equipment maintenance, and technological infrastructure. The site was designed to convey credibility and professionalism, with clear service sections, customer testimonials, and results metrics. The responsive interface uses subtle scroll animations to engage users and highlight the company\'s differentials.',

        'project.clinical-simulator.title': 'Clinical Case Simulator',
        'project.clinical-simulator.description': 'Immersive medical simulator built with Next.js for diagnostic training. Features robust architecture with automated testing (QA), documented Design System, and high-fidelity responsive interface with optimized mobile support.',
        'project.clinical-simulator.fullDescription': 'Clinical simulation platform offering immersive Mobile-First experience for real case analysis, exam interpretation, and diagnostic decision-making. Implements QA culture with automated testing (Jest + RTL), Design System via Storybook, secure authentication (Supabase RLS), and SSR (Server-Side Rendering) for optimized performance.',

        'project.skyboard.title': 'Skyboard',
        'project.skyboard.description': 'Kanban-style task management SPA (Single Page Application), focused on clean architecture, Angular 19, and real-time persistence via Supabase.',
        'project.skyboard.fullDescription': 'Kanban application built with Angular 19, focused on Clean Architecture and premium user experience. Implements responsive Dark Mode interface, real-time persistence with Supabase (PostgreSQL), Drag-and-Drop functionality, and automated CI/CD via GitHub Actions. Architecture follows Service Layer Pattern for scalable and testable code.',

        'project.portfolio.title': 'Personal Portfolio',
        'project.portfolio.description': 'Professional portfolio built with Next.js, React, TypeScript, and SCSS, featuring modular architecture (BEM) and premium responsive design.',
        'project.portfolio.fullDescription': 'Portfolio built with Next.js, React, TypeScript, and modular SCSS (BEM methodology). The project follows Clean Code and Clean Architecture principles, leveraging Custom Hooks for logic abstraction. Implements internationalization system (i18n) for PT/EN support, premium responsive design, and SSG (Static Site Generation) rendering for maximum performance and SEO. Modular structure ensures maintainability and scalability.',

        // Experience
        'experience.title': 'Recent',
        'experience.titleAccent': 'Experience',
        'experience.subtitle': 'My latest professional experiences.',
        'experience.linkedinCta': 'See my full career timeline on my',

        // Experience Data
        'experience.bhs-senior.role': 'Senior Frontend Developer',
        'experience.bhs-senior.description': 'Technical leadership in the Cemig SIM project (React Native App + Next.js Web). Implementation of E2E tests with Cypress, CI/CD with GitHub Actions, and developer mentoring.',

        'experience.bhs-middle.role': 'Middle Frontend Developer',
        'experience.bhs-middle.description': 'Refactoring of legacy systems with Angular. Hybrid role as Dev + UI/UX Designer, creating prototypes and improving usability.',

        'experience.alpes.role': 'Frontend Developer',
        'experience.alpes.description': 'Technical lead for the Frontend sector. Team leadership with intern mentoring. High-performance sites for Audi Center BH, Strada Jeep, and Fiat.',

        // About
        'about.title': 'About',
        'about.titleAccent': 'Me',
        'about.text1': 'Developer with 10+ years of Frontend experience, Computer Science degree (UniBH, 2017) and English exchange in Malta completed in 2024 (B2).',
        'about.text2': 'Worked on projects for companies like Cemig, Caixa Econômica Federal, BDMG, Sebrae and UFMG. Experience in technical leadership, developer mentoring and Scrum environments.',

        // Contact
        'contact.title': 'Contacts',
        'contact.subtitle': 'I\'m available for new opportunities. Get in touch!',
        'contact.whatsappLabel': 'WhatsApp',
        'contact.whatsappAction': 'Call',
        'contact.emailLabel': 'E-mail',
        'contact.emailAction': 'Send',
        'contact.linkedinLabel': 'LinkedIn',
        'contact.linkedinAction': 'Connect',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'your@email.com',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Tell me about your project...',
        'contact.form.send': 'Send Message',
        'contact.or': 'Or contact directly:',
        'contact.whatsapp': 'Chat on WhatsApp',
    },
};
