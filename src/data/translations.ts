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
        'hero.label': 'Senior Frontend Engineer',
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
        'project.lanformation.description': 'Site institucional desenvolvido para empresa de serviços e soluções de TI de Belo Horizonte.',
        'project.lanformation.fullDescription': 'Desenvolvimento front-end do portal institucional da Lanformation, empresa especializada em locação de mão de obra de TI (Body Shop), manutenção de equipamentos e infraestrutura tecnológica. O site foi projetado para transmitir credibilidade e profissionalismo, com seções claras de serviços, depoimentos de clientes e métricas de resultados. A interface responsiva utiliza animações sutis de scroll para engajar o usuário e destacar os diferenciais da empresa.',

        'project.clinical-simulator.title': 'Clinical Case Simulator',
        'project.clinical-simulator.description': 'Simulador médico imersivo desenvolvido com Next.js 16 para treinamento de diagnóstico. Apresenta arquitetura robusta com testes automatizados (QA), Design System documentado e interface responsiva de alta fidelidade com suporte mobile otimizado.',
        'project.clinical-simulator.fullDescription': 'Plataforma de simulação clínica projetada para preencher a lacuna entre teoria e prática médica. O sistema oferece uma experiência imersiva e responsiva (Mobile-First), permitindo análise de casos reais, interpretação de exames e tomada de decisões diagnósticas com feedback visual imediato. Destaques de Engenharia: Cultura de QA com cobertura de fluxos críticos (Jest + React Testing Library), UX/UI refinada com Tailwind CSS e unidades modernas (dvh), Design System documentado via Storybook para consistência visual, e segurança via Supabase com Row Level Security (RLS).',

        'project.skyboard.title': 'Skyboard',
        'project.skyboard.description': 'Desenvolvimento de uma SPA (Single Page Application) de gestão de tarefas estilo Kanban, focada em arquitetura limpa, Angular 19 e persistência em tempo real via Supabase.',
        'project.skyboard.fullDescription': 'Projeto desenvolvido para demonstrar a construção de aplicações ricas e interativas utilizando o ecossistema moderno do Angular 19. O foco principal foi a engenharia de software e a experiência do usuário (UX), implementando uma interface Dark Mode refinada e responsiva. A arquitetura foi desenhada seguindo princípios de Clean Code e separação de responsabilidades (Service Layer Pattern), garantindo um código escalável e testável. O projeto integra persistência de dados em tempo real utilizando Supabase (PostgreSQL), funcionalidade de Drag-and-Drop fluida via Angular CDK e uma esteira de CI/CD automatizada com GitHub Actions para manutenção autônoma da infraestrutura.',

        'project.portfolio.title': 'Portfolio Pessoal',
        'project.portfolio.description': 'Portfolio profissional desenvolvido com Next.js 15 e React 19, apresentando arquitetura SCSS modular (BEM), animações fluidas com Framer Motion e design premium responsivo.',
        'project.portfolio.fullDescription': 'Portfolio desenvolvido para demonstrar domínio técnico em engenharia front-end moderna. O projeto destaca-se pela arquitetura SCSS escalável utilizando metodologia BEM, sistema de internacionalização (i18n) para suporte multilíngue (PT/EN), animações de micro-interação com Framer Motion, e design responsivo premium com foco em acessibilidade e performance. A estrutura modular garante manutenibilidade e facilita a evolução contínua do projeto.',

        // Experience
        'experience.title': 'Experiência',
        'experience.titleAccent': 'Recente',
        'experience.subtitle': 'Minhas últimas experiências profissionais.',
        'experience.linkedinCta': 'Veja minha trajetória completa no meu',

        // Experience Data
        'experience.bhs-senior.role': 'Senior Frontend Developer',
        'experience.bhs-senior.description': 'Liderança técnica no projeto Cemig SIM (App React Native + Web Next.js). Implementação de testes E2E com Cypress, CI/CD com GitHub Actions, e mentoria de desenvolvedores.',

        'experience.bhs-middle.role': 'Middle Frontend Developer',
        'experience.bhs-middle.description': 'Refatoração de sistemas legados com Angular. Atuação híbrida como Dev + UI/UX Designer, criando protótipos e melhorando usabilidade.',

        'experience.alpes.role': 'Frontend Developer',
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
        'hero.label': 'Senior Frontend Engineer',
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
        'project.lanformation.description': 'Institutional website developed for an IT services and solutions company in Belo Horizonte.',
        'project.lanformation.fullDescription': 'Front-end development of the Lanformation institutional portal, a company specializing in IT staffing (Body Shop), equipment maintenance, and technological infrastructure. The site was designed to convey credibility and professionalism, with clear service sections, customer testimonials, and results metrics. The responsive interface uses subtle scroll animations to engage users and highlight the company\'s differentials.',

        'project.clinical-simulator.title': 'Clinical Case Simulator',
        'project.clinical-simulator.description': 'Immersive medical simulator built with Next.js 16 for diagnostic training. Features robust architecture with automated testing (QA), documented Design System, and high-fidelity responsive interface with optimized mobile support.',
        'project.clinical-simulator.fullDescription': 'Clinical simulation platform designed to bridge the gap between medical theory and practice. The system offers an immersive and responsive (Mobile-First) experience, enabling real case analysis, exam interpretation, and diagnostic decision-making with immediate visual feedback. Engineering Highlights: QA culture with critical flow coverage (Jest + React Testing Library), refined UX/UI with Tailwind CSS and modern units (dvh), Design System documented via Storybook for visual consistency, and security via Supabase with Row Level Security (RLS).',

        'project.skyboard.title': 'Skyboard',
        'project.skyboard.description': 'Development of a Kanban-style task management SPA (Single Page Application), focused on clean architecture, Angular 19 and real-time persistence via Supabase.',
        'project.skyboard.fullDescription': 'Project developed to demonstrate building rich and interactive applications using the modern Angular 19 ecosystem. The main focus was software engineering and user experience (UX), implementing a refined and responsive Dark Mode interface. The architecture was designed following Clean Code principles and separation of concerns (Service Layer Pattern), ensuring scalable and testable code. The project integrates real-time data persistence using Supabase (PostgreSQL), fluid Drag-and-Drop functionality via Angular CDK, and an automated CI/CD pipeline with GitHub Actions for autonomous infrastructure maintenance.',

        'project.portfolio.title': 'Personal Portfolio',
        'project.portfolio.description': 'Professional portfolio built with Next.js 15 and React 19, featuring modular SCSS architecture (BEM), smooth animations with Framer Motion, and premium responsive design.',
        'project.portfolio.fullDescription': 'Portfolio developed to demonstrate technical mastery in modern front-end engineering. The project stands out for its scalable SCSS architecture using BEM methodology, internationalization system (i18n) for multilingual support (PT/EN), micro-interaction animations with Framer Motion, and premium responsive design focused on accessibility and performance. The modular structure ensures maintainability and facilitates continuous project evolution.',

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
