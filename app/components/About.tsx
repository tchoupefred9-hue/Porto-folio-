'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Briefcase } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const highlights = [
    {
      icon: Award,
      title: 'Expertise Principale',
      description: 'Installation et maintenance de systèmes de sécurité électronique, caméras IP et analogiques',
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'BT en Maintenance et Installation des Systèmes Électroniques • Actuellement en Génie Informatique à l\'IUT de Douala',
    },
    {
      icon: Briefcase,
      title: 'Expérience',
      description: 'Stages professionnels et installations indépendantes de systèmes de surveillance haute définition',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">À propos de moi</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </motion.div>

          {/* Description */}
          <motion.div className="space-y-6 text-slate-300 text-lg" variants={containerVariants}>
            <motion.p variants={itemVariants}>
              Je suis un <span className="text-blue-400 font-semibold">technicien spécialisé</span> en maintenance et installation des systèmes électroniques, avec une expertise particulière dans les systèmes de sécurité et de surveillance. Mon parcours combine une formation technique solide avec une expérience pratique sur le terrain.
            </motion.p>
            <motion.p variants={itemVariants}>
              J\'ai obtenu mon <span className="text-blue-400 font-semibold">BT en Maintenance et Installation des Systèmes Électroniques</span> et je poursuis actuellement mes études en <span className="text-blue-400 font-semibold">Génie Informatique</span> à l\'IUT de Douala, ce qui me permet d\'élargir mes compétences dans le domaine numérique.
            </motion.p>
            <motion.p variants={itemVariants}>
              Mon expérience professionnelle couvre l\'installation de caméras IP et analogiques, la configuration de systèmes DVR/NVR, le câblage réseau, la maintenance électronique et le dépannage de systèmes complexes. Je suis également en apprentissage du développement web, que je considère comme une compétence complémentaire pour enrichir ma pratique technique.
            </motion.p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                  variants={itemVariants}
                >
                  <Icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm">{highlight.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
