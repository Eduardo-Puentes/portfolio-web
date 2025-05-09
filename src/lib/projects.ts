export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    metrics: string[];
    link?: string;            // ← add this
  }
  
  export const projects: Project[] = [
    {
      id: 'patrones-hermosos',
      title: 'Patrones Hermosos Backend',
      description:
        'FastAPI services with role-based JWT auth, PostgreSQL integration, AWS SES emails, S3 storage.',
      tech: ['FastAPI', 'MySQL', 'AWS SES', 'AWS S3', 'JWT'],
      metrics: ['100% email delivery', 'Automated daily cron jobs'],
      link: 'https://registro-patroneshermosos.org/',   // ← your live URL
    },
    {
      id: 'venue-menu',
      title: 'VenueMenu Platform',
      description:
        'Go backend with Gin, MongoDB schemas & aggregation, deployed on AWS ECS.',
      tech: ['Go', 'Gin', 'MongoDB', 'Docker', 'AWS ECS'],
      metrics: ['500+ concurrent users', '20% infra cost reduction'],
      // link: 'https://your-venue-menu-url.com',       // ← if/when you have one
    },
    {
      id: 'audio-mastering',
      title: 'Audio Mastering Service',
      description:
        'FastAPI API processing audio with Pedalboard & VST3, containerized via Docker.',
      tech: ['FastAPI', 'Pedalboard', 'VST3', 'Docker', 'AWS S3'],
      metrics: ['10+ concurrent jobs', '30% faster turnaround', '95% success rate'],
      // link: 'https://your-audio-service-url.com',
    },
  ];