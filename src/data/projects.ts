export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: 'coolabs',
    title: 'CooLabs UFMG',
    description: 'Plataforma de cooperativa de laboratórios da UFMG com design moderno e intuitivo.',
    image: '/images/projects/coolabs.png',
    url: 'https://coolabs.ufmg.br/',
    stack: ['Next.js', 'SASS', 'TypeScript'],
    category: 'Institucional'
  },
  {
    id: 'skyflix',
    title: 'Skyflix',
    description: 'Plataforma de streaming com conteúdo educativo e familiar, design dark theme premium.',
    image: '/images/projects/skyflix.png',
    url: 'https://www.skyflix.site/pt-br',
    stack: ['Next.js', 'TypeScript', 'SASS'],
    category: 'Plataforma'
  },
  {
    id: 'lanformation',
    title: 'Lanformation',
    description: 'Site corporativo para empresa de alocação de talentos em tecnologia.',
    image: '/images/projects/lanformation.png',
    url: 'https://lanformation.com.br/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Corporativo'
  },
  {
    id: 'lidery',
    title: 'Lidery',
    description: 'Clube de vantagens e economia para associados, com foco em experiência do usuário.',
    image: '/images/projects/lidery.png',
    url: 'https://liderynl.github.io',
    stack: ['HTML5', 'CSS3', 'Bootstrap'],
    category: 'Landing Page'
  },
  {
    id: 'microscopia',
    title: 'Centro de Microscopia UFMG',
    description: 'Portal científico para evento de microscopia eletrônica e criotécnicas.',
    image: '/images/projects/microscopia.png',
    url: 'https://microscopia-ufmg.github.io/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Institucional'
  }
];
