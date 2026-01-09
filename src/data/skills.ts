export interface SkillCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend-core',
        title: 'Frontend Core',
        description: 'Fundamentos sólidos para construir interfaces modernas com semântica e performance.',
        icon: '💻',
        skills: ['HTML5', 'CSS3', 'ES6+', 'TypeScript']
    },
    {
        id: 'frameworks',
        title: 'Frameworks',
        description: 'Arquiteturas modernas para aplicações complexas e escaláveis.',
        icon: '⚛️',
        skills: ['React', 'Next.js', 'Angular', 'React Native']
    },
    {
        id: 'quality',
        title: 'Quality & Testing',
        description: 'Garantia de qualidade com testes automatizados e boas práticas.',
        icon: '✅',
        skills: ['Jest', 'Cypress', 'RTL', 'E2E']
    },
    {
        id: 'devops',
        title: 'DevOps & Tools',
        description: 'Ferramentas para integração contínua e deploy eficiente.',
        icon: '🚀',
        skills: ['Git', 'GitHub Actions', 'CI/CD', 'Azure DevOps']
    }
];
