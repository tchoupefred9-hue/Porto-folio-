'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-lg font-light">
            Merci de votre visite.
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Tchoupe Pembe Karl Bryan. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
