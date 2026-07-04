'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { installations, projects } from '@/data/projects'

export default function Projects() {
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Mes réalisations</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </motion.div>

          {/* Installations Section */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold text-white" variants={itemVariants}>
              Installations de caméras
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {installations.map((installation, index) => (
                <motion.div
                  key={index}
                  className="group rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full bg-slate-700 overflow-hidden">
                    {installation.image ? (
                      <Image
                        src={installation.image}
                        alt={installation.location}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <span className="text-sm">Image à ajouter</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{installation.location}</h4>
                      <p className="text-sm text-slate-400">{installation.description}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-400">
                        <span className="text-slate-400">Caméras:</span> {installation.cameraCount}
                      </p>
                      <p className="text-slate-400">
                        <span className="text-blue-400 font-semibold">Équipements:</span> {installation.equipment.join(', ')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.p className="text-slate-400 text-sm italic" variants={itemVariants}>
              💡 Plus de projets d\'installation seront ajoutés régulièrement à cette galerie.
            </motion.p>
          </motion.div>

          {/* Projects Section */}
          <motion.div className="space-y-8 pt-8 border-t border-slate-800" variants={containerVariants}>
            <motion.h3 className="text-2xl font-bold text-white" variants={itemVariants}>
              Projets informatiques
            </motion.h3>
            <motion.p className="text-slate-400" variants={itemVariants}>
              Ces projets sont en cours de développement dans le cadre de mon apprentissage en développement web.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 w-full bg-slate-700 overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <span className="text-sm">Image à ajouter</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
                        <p className="text-sm text-slate-400">{project.description}</p>
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Démo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="md:col-span-2 p-8 rounded-xl border-2 border-dashed border-slate-700 text-center"
                  variants={itemVariants}
                >
                  <p className="text-slate-400 mb-2">Aucun projet pour le moment</p>
                  <p className="text-slate-500 text-sm">
                    Les projets informatiques seront ajoutés au fur et à mesure du développement
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
