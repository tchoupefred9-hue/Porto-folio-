'use client'

import { ArrowRight, Github, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Photo placeholder */}
          <motion.div
            className="flex justify-center lg:order-first order-last"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-blue-500/30 glow-effect">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Photo à ajouter</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p
                className="text-blue-400 font-semibold text-lg"
                variants={itemVariants}
              >
                Bonjour,
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Je suis <span className="gradient-text">Tchoupe Pembe</span>
              </motion.h1>
              <motion.h2
                className="text-xl sm:text-2xl text-slate-300"
                variants={itemVariants}
              >
                Technicien en Maintenance et Installation des Systèmes Électroniques
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <p className="text-slate-400">
                Étudiant en Génie Informatique • Installation de caméras de surveillance • Passionné par les nouvelles technologies
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50 group"
              >
                Voir mes réalisations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white rounded-lg font-semibold transition-all hover:bg-blue-500/10"
              >
                Me contacter
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4 pt-8" variants={itemVariants}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:text-blue-400"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:dollarbrayan8@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:text-blue-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/237692860695"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:text-blue-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
