export interface Installation {
  location: string
  description: string
  cameraCount: number
  equipment: string[]
  image?: string
}

export interface Project {
  name: string
  description: string
  image?: string
  github?: string
  demo?: string
}

// Installations de caméras - Modifiez les données ici
export const installations: Installation[] = [
  {
    location: 'Exemple - À remplacer',
    description: 'Description du projet d\'installation',
    cameraCount: 4,
    equipment: ['Caméras IP', 'NVR'],
    image: undefined, // Remplacez par votre URL d'image ou chemin local
  },
  // Ajoutez d'autres installations ici
]

// Projets informatiques - Vides pour le moment, remplissez avec vos projets
export const projects: Project[] = [
  // Exemple de structure (à commenter ou supprimer):
  // {
  //   name: 'Nom du projet',
  //   description: 'Description courte du projet',
  //   image: '/images/projects/project-name.jpg',
  //   github: 'https://github.com/votre-username/repo',
  //   demo: 'https://project-demo-url.com',
  // },
]
