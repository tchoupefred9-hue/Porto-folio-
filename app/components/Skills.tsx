'use client'

import { motion } from 'framer-motion'
import { Camera, Wrench, Shield, Zap, Globe, Code } from 'lucide-react'

export default function Skills() {
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

  const mainSkills = [
    { icon: Camera, name: 'Installation de caméras IP', category: 'Expertise' },
    { icon: Camera, name: 'Caméras analogiques', category: 'Expertise' },
    { icon: Wrench, name: 'Configuration DVR', category: 'Expertise' },
    { icon: Wrench, name: 'Configuration NVR', category: 'Expertise' },
    { icon: Zap, name: 'Câblage réseau', category: 'Expertise' },
    { icon: Wrench, name: 'Maintenance électronique', category: 'Expertise' },
    { icon: Shield, name: 'Dépannage', category: 'Expertise' },
    { icon: Shield, name: 'Diagnostic des pannes', category: 'Expertise' },
    { icon: Shield, name: 'Installation de systèmes de sécurité', category: 'Expertise' },
  ]

  const complementarySkills = [
    { icon: Code, name: 'HTML', category: 'En apprentissage' },
    { icon: Code, name: 'CSS', category: 'En apprentissage' },
    { icon: Code, name: 'JavaScript', category: 'En apprentissage' },
    { icon: Code, name: 'Next.js', category: 'En apprentissage' },
    { icon: Globe, name: 'Cybersécurité', category: 'En apprentissage' },
  ]

  const SkillCard = ({ icon: Icon, name, category }: { icon: any; name: string; category: string }) => (
    <motion.div
      className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
      variants={itemVariants}
      whileHover={{ y: -4 }}
    >
      <Icon className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
      <h4 className="text-sm font-semibold text-white mb-1">{name}</h4>
      <p className="text-xs text-slate-400">{category}</p>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Mes compétences</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </motion.div>

          {/* Main Skills */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-4">Compétences principales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Complementary Skills */}
          <motion.div className="space-y-6 pt-8 border-t border-slate-800" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-4">Compétences complémentaires</h3>
              <p className="text-slate-400 mb-4 text-sm">
                Je développe progressivement des compétences en développement web comme complément à ma formation en Génie Informatique.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {complementarySkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
