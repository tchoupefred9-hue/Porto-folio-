export interface Experience {
  title: string
  company: string
  description?: string
  date?: string
  location?: string
}

export const experiences: Experience[] = [
  {
    title: 'Formation: Génie Informatique',
    company: 'IUT de Douala',
    description: 'Poursuite des études en Génie Informatique',
    date: 'En cours',
    location: 'Douala, Cameroun',
  },
  {
    title: 'Technicien Indépendant',
    company: 'Installations de caméras de surveillance',
    description: 'Installation et configuration de systèmes de sécurité pour particuliers et petites entreprises',
    location: 'Douala, Cameroun',
  },
  {
    title: 'Stage',
    company: 'Afrilux',
    description: 'Maintenance et installation de systèmes électroniques',
    location: 'Douala, Cameroun',
  },
  {
    title: 'Stage',
    company: 'Kebelect',
    description: 'Formation pratique en maintenance électronique et installation',
    location: 'Douala, Cameroun',
  },
  {
    title: 'Formation: BT Maintenance et Installation',
    company: 'Systèmes Électroniques',
    description: 'Formation technique complète en systèmes électroniques',
    location: 'Cameroun',
  },
]
