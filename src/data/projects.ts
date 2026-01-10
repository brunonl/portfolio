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
    title: 'CooLabs UFMG',
    description: 'Plataforma de cooperativa de laboratórios da UFMG.',
    fullDescription: 'Plataforma de cooperativa de laboratórios da Universidade Federal de Minas Gerais. O projeto foi desenvolvido com foco em usabilidade e design moderno, facilitando a conexão entre pesquisadores e laboratórios disponíveis na universidade.',
    image: '/images/projects/coolabs.png',
    liveUrl: 'https://coolabs.ufmg.br/',
    stack: ['Next.js', 'SASS', 'TypeScript'],
    category: 'Institucional'
  },
  {
    id: 'skyflix',
    title: 'Skyflix',
    description: 'Plataforma de streaming com conteúdo educativo e familiar.',
    fullDescription: 'Plataforma de streaming com conteúdo educativo e familiar, desenvolvida com dark theme premium. O projeto inclui sistema de autenticação, playlists personalizadas e interface responsiva para múltiplos dispositivos.',
    image: '/images/projects/skyflix.png',
    liveUrl: 'https://www.skyflix.site/pt-br',
    stack: ['Next.js', 'TypeScript', 'SASS'],
    category: 'Plataforma'
  },
  {
    id: 'lanformation',
    title: 'Lanformation',
    description: 'Site corporativo para empresa de alocação de talentos.',
    fullDescription: 'Site corporativo para empresa especializada em alocação de talentos em tecnologia. O projeto foi desenvolvido com foco em performance, SEO e apresentação institucional profissional.',
    image: '/images/projects/lanformation.png',
    liveUrl: 'https://lanformation.com.br/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Corporativo'
  },
  {
    id: 'lidery',
    title: 'Lidery',
    description: 'Clube de vantagens e economia para associados.',
    fullDescription: 'Clube de vantagens e economia para associados, com foco em experiência do usuário e conversão. Landing page desenvolvida para apresentar os benefícios do clube e capturar leads.',
    image: '/images/projects/lidery.png',
    liveUrl: 'https://liderynl.github.io',
    stack: ['HTML5', 'CSS3', 'Bootstrap'],
    category: 'Landing Page'
  },
  {
    id: 'microscopia',
    title: 'Centro de Microscopia UFMG',
    description: 'Portal científico para evento de microscopia eletrônica.',
    fullDescription: 'Portal científico desenvolvido para evento de microscopia eletrônica e criotécnicas da UFMG. O site apresenta informações sobre o evento, palestrantes, programação e inscrições.',
    image: '/images/projects/microscopia.png',
    liveUrl: 'https://microscopia-ufmg.github.io/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Institucional'
  }
];
