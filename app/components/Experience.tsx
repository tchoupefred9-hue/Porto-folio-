'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Expérience & Formation</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-0 lg:pl-12"
                variants={itemVariants}
              >
                {/* Dot */}
                <div className="hidden lg:block absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950 transform -translate-x-1.5"></div>

                {/* Card */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-400">
                      {exp.date && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.date}
                        </div>
                      )}
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
