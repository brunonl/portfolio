export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
}

export const experiences: Experience[] = [
    {
        id: 'bhs-senior',
        role: 'Senior Frontend Developer',
        company: 'BHS',
        period: '2021 - 2025',
        description: 'Liderança técnica em projetos estratégicos como Cemig SIM e Portal O Tempo (+25mi views/mês).',
        highlights: [
            'Liderança técnica em App (React Native) e Web (Next.js)',
            'Implementação de testes E2E com 90% de cobertura',
            'Mentoria para desenvolvedores juniores'
        ]
    },
    {
        id: 'bhs-middle',
        role: 'Middle Frontend Developer',
        company: 'BHS',
        period: '2018 - 2021',
        description: 'Refatoração de sistemas legados e atuação híbrida como Dev + UI/UX Designer.',
        highlights: [
            'Migração de aplicações legadas para Angular',
            'Prototipagem de interfaces em Figma/XD',
            'Melhoria de usabilidade em sistemas internos'
        ]
    },
    {
        id: 'alpes',
        role: 'Frontend Developer',
        company: 'Alpes One',
        period: '2017 - 2018',
        description: 'Desenvolvimento de sites e Landing Pages de alta performance para clientes automotivos.',
        highlights: [
            'Clientes: Audi Center BH, Strada Jeep, Fiat',
            'Foco em SEO e otimização de performance'
        ]
    },
    {
        id: 'stefanini',
        role: 'Frontend Developer',
        company: 'Stefanini',
        period: '2016 - 2017',
        description: 'Desenvolvimento de Design System para BDMG e projetos para clientes enterprise.',
        highlights: [
            'Design System para Banco de Desenvolvimento de MG',
            'Projetos para Sebrae e Caixa Econômica Federal'
        ]
    }
];
