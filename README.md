# Portfolio - Tchoupe Pembe Karl Bryan

Portfolio professionnel moderne et élégant pour un technicien en maintenance et installation des systèmes électroniques.

## 🚀 Caractéristiques

- **Design moderne et minimaliste** inspiré d'Apple et Vercel
- **Responsive et mobile-first**
- **Mode sombre** avec thème bleu/blanc/gris
- **Animations fluides** avec Framer Motion
- **Composants réutilisables** avec TypeScript
- **Optimisé pour les performances**

## 📋 Sections

- **Accueil** - Introduction avec appel à l'action
- **À propos** - Présentation du parcours et des expériences
- **Compétences** - Cartes des compétences principales et complémentaires
- **Réalisations** - Galerie d'installations de caméras et projets informatiques
- **Expérience & Formation** - Timeline de carrière
- **Services** - Services proposés
- **Contact** - Informations de contact et formulaire

## 🛠️ Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Sécurité des types
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations
- **Lucide React** - Icônes

## 📦 Installation

```bash
# Cloner le dépôt
git clone https://github.com/tchoupefred9-hue/Porto-folio-.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est accessible à `http://localhost:3000`

## 📝 Configuration

### Données principales

- **Installations de caméras** : `data/projects.ts`
- **Projets informatiques** : `data/projects.ts`
- **Expérience & Formation** : `data/experience.ts`

### Ajouter une installation de caméras

Mettez à jour `data/projects.ts` :

```typescript
installations.push({
  location: 'Localisation',
  description: 'Description du projet',
  cameraCount: 8,
  equipment: ['Caméras IP', 'NVR 8 canaux'],
  image: '/images/installations/your-image.jpg',
})
```

### Ajouter un projet informatique

Mettez à jour `data/projects.ts` :

```typescript
projects.push({
  name: 'Nom du projet',
  description: 'Description courte',
  image: '/images/projects/project.jpg',
  github: 'https://github.com/...',
  demo: 'https://demo-url.com',
})
```

## 🖼️ Médias

Ajoutez vos images dans le dossier `public/images/` :

```
public/
├── images/
│   ├── installations/
│   │   └── your-image.jpg
│   └── projects/
│       └── project-name.jpg
```

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### GitHub Pages

1. Modifiez `next.config.js` pour exporter statique
2. Configurez le dépôt pour déployer depuis `/out`

## 📱 Responsive

Le portfolio est entièrement responsive :

- **Mobile** (< 640px)
- **Tablet** (640px - 1024px)
- **Desktop** (> 1024px)

## 🎨 Personnalisation

### Couleurs

Modifiez `tailwind.config.ts` :

```typescript
colors: {
  primary: '#0f172a',
  accent: '#3b82f6',
}
```

### Typographie

Modifiez `app/globals.css` :

```css
body {
  font-family: 'Votre police', sans-serif;
}
```

## 📞 Contact

- **Téléphone** : 692860695 / 652591205
- **Email** : dollarbrayan8@gmail.com
- **WhatsApp** : +237 692 860 695
- **Localisation** : Douala (Feu Rouge Bessengue)

## 📄 Licence

Ce projet est personnel. Tous droits réservés.

## 🙏 Crédits

Développé avec ❤️ par Tchoupe Pembe Karl Bryan
