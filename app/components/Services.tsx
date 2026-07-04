'use client'

import { motion } from 'framer-motion'
import { Camera, Wrench, Shield, Zap, Code } from 'lucide-react'

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const services = [
    {
      icon: Camera,
      title: 'Installation de caméras de surveillance',
      description: 'Installation complète de systèmes de caméras IP et analogiques pour vos besoins de sécurité',
    },
    {
      icon: Wrench,
      title: 'Maintenance électronique',
      description: 'Maintenance préventive et corrective de vos systèmes électroniques et équipements',
    },
    {
      icon: Shield,
      title: 'Dépannage informatique',
      description: 'Diagnostic et résolution des problèmes informatiques et réseau',
    },
    {
      icon: Zap,
      title: 'Installation de réseaux locaux',
      description: 'Mise en place et configuration de réseaux LAN performants et sécurisés',
    },
    {
      icon: Shield,
      title: 'Configuration de systèmes de sécurité',
      description: 'Configuration et intégration complètes de solutions de sécurité',
    },
    {
      icon: Code,
      title: 'Projets web (apprentissage)',
      description: 'Participation à des projets web simples dans le cadre de mon développement professionnel',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
