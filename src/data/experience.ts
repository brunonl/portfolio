export interface Experience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
}

export const experiences: Experience[] = [
    {
        id: 'bhs-senior',
        role: 'experience.bhs-senior.role',
        company: 'BHS',
        companyUrl: 'https://bhs.com.br',
        period: '2021 - 2025',
        description: 'experience.bhs-senior.description',
    },
    {
        id: 'bhs-middle',
        role: 'experience.bhs-middle.role',
        company: 'BHS',
        companyUrl: 'https://bhs.com.br',
        period: '2018 - 2021',
        description: 'experience.bhs-middle.description',
    },
    {
        id: 'alpes',
        role: 'experience.alpes.role',
        company: 'Alpes One',
        period: '2017 - 2018',
        description: 'experience.alpes.description',
    },
];
