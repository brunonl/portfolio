// ============================================
// Projects Data - Bruno Meireles Portfolio
// ============================================

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'audicenterbh',
    title: 'project.audicenterbh.title',
    description: 'project.audicenterbh.description',
    fullDescription: 'project.audicenterbh.fullDescription',
    image: '/images/projects/audicenterbh/audicenterbh.png',
    liveUrl: 'https://audibelohorizonte.com.br/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Institucional',
  },
  {
    id: 'lanformation',
    title: 'project.lanformation.title',
    description: 'project.lanformation.description',
    fullDescription: 'project.lanformation.fullDescription',
    image: '/images/projects/lanformation/lanformation.png',
    liveUrl: 'https://lanformation.com.br/',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Institucional',
  },
  {
    id: 'microscopia',
    title: 'project.microscopia.title',
    description: 'project.microscopia.description',
    fullDescription: 'project.microscopia.fullDescription',
    image: '/images/projects/microscopia/microscopia.png',
    liveUrl: 'https://microscopia-ufmg.vercel.app/',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Institucional',
  },
  {
    id: 'clinical-simulator',
    title: 'project.clinical-simulator.title',
    description: 'project.clinical-simulator.description',
    fullDescription: 'project.clinical-simulator.fullDescription',
    image: '/images/projects/clinical-simulator/clinical-simulator1.png',
    images: [
      '/images/projects/clinical-simulator/clinical-simulator1.png',
      '/images/projects/clinical-simulator/clinical-simulator2.PNG',
      '/images/projects/clinical-simulator/clinical-simulator3.PNG',
      '/images/projects/clinical-simulator/clinical-simulator4.PNG',
      '/images/projects/clinical-simulator/clinical-simulator5.PNG',
    ],
    liveUrl: 'https://clinical-case-simulator.vercel.app/',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Jest', 'Storybook', 'Supabase'],
    category: 'Educação Médica',
  },
  {
    id: 'skyboard',
    title: 'project.skyboard.title',
    description: 'project.skyboard.description',
    fullDescription: 'project.skyboard.fullDescription',
    image: '/images/projects/skyboard/skyboard.png',
    liveUrl: 'https://skyboard-angular.vercel.app/',
    repoUrl: 'https://github.com/brunonl/skyboard-angular',
    stack: ['Angular 19', 'TypeScript', 'SASS', 'Supabase', 'Angular CDK'],
    category: 'Aplicação Web',
  },
  {
    id: 'portfolio',
    title: 'project.portfolio.title',
    description: 'project.portfolio.description',
    fullDescription: 'project.portfolio.fullDescription',
    image: '/images/projects/portfolio/portfolio.PNG',
    repoUrl: 'https://github.com/brunonl/portfolio',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'SCSS', 'Framer Motion'],
    category: 'Portfolio',
  },
];
