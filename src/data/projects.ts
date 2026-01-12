export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: 'coolabs',
    title: 'project.coolabs.title',
    description: 'project.coolabs.description',
    fullDescription: 'project.coolabs.fullDescription',
    image: '/images/projects/coolabs.png',
    liveUrl: 'https://coolabs.ufmg.br/',
    stack: ['Next.js', 'SASS', 'TypeScript'],
    category: 'Institucional'
  },
  {
    id: 'skyflix',
    title: 'project.skyflix.title',
    description: 'project.skyflix.description',
    fullDescription: 'project.skyflix.fullDescription',
    image: '/images/projects/skyflix.png',
    liveUrl: 'https://www.skyflix.site/pt-br',
    stack: ['Next.js', 'TypeScript', 'SASS'],
    category: 'Plataforma'
  },
  {
    id: 'lanformation',
    title: 'project.lanformation.title',
    description: 'project.lanformation.description',
    fullDescription: 'project.lanformation.fullDescription',
    image: '/images/projects/lanformation.png',
    liveUrl: 'https://lanformation.com.br/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Corporativo'
  },
  {
    id: 'lidery',
    title: 'project.lidery.title',
    description: 'project.lidery.description',
    fullDescription: 'project.lidery.fullDescription',
    image: '/images/projects/lidery.png',
    liveUrl: 'https://liderynl.github.io',
    stack: ['HTML5', 'CSS3', 'Bootstrap'],
    category: 'Landing Page'
  },
  {
    id: 'microscopia',
    title: 'project.microscopia.title',
    description: 'project.microscopia.description',
    fullDescription: 'project.microscopia.fullDescription',
    image: '/images/projects/microscopia.png',
    liveUrl: 'https://microscopia-ufmg.github.io/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Institucional'
  }
];
