'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

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

  const contactMethods = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '692860695 / 652591205',
      href: 'tel:+237692860695',
      copyValue: '692860695',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'dollarbrayan8@gmail.com',
      href: 'mailto:dollarbrayan8@gmail.com',
      copyValue: 'dollarbrayan8@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+237 692 860 695',
      href: 'https://wa.me/237692860695',
      copyValue: '+237692860695',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Douala (Feu Rouge Bessengue)',
      href: null,
      copyValue: null,
    },
  ]

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Me contacter</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <p className="text-slate-400 text-lg">
              N\'hésitez pas à me contacter pour discuter de vos projets ou de toute opportunité de collaboration.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const id = `contact-${index}`
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                  variants={itemVariants}
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                  <div className="flex items-center justify-between gap-2">
                    {method.href ? (
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex-1"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-slate-400 flex-1">{method.value}</p>
                    )}
                    {method.copyValue && (
                      <button
                        onClick={() => handleCopy(method.copyValue, id)}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                        title="Copier"
                      >
                        {copied === id ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-slate-400 hover:text-white" />
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30"
            variants={itemVariants}
          >
            <p className="text-slate-300 mb-4">
              Répondre rapidement est ma priorité. Attendez-vous à une réaction dans les 24 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dollarbrayan8@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50"
              >
                Envoyer un email
              </a>
              <a
                href="https://wa.me/237692860695"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white rounded-lg font-semibold transition-all hover:bg-blue-500/10"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
