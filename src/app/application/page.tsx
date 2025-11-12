'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Microscope, Heart, Stethoscope, PawPrint } from 'lucide-react'

// Sub-navigation items for application sections
const applicationSubNavigation = [
  { id: 'clinical-diagnostics', name: 'Clinical Diagnostics', active: true },
  { id: 'life-science-research', name: 'Life Science Research', active: false },
  { id: 'patient-monitoring', name: 'Patient Monitoring', active: false },
  { id: 'veterinary-solutions', name: 'Veterinary Solutions', active: false }
]

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/85 via-[#0A1931]/75 to-teal-900/85 z-10"></div>
        <Image
          src="/images/diagnostic_lab.png"
          alt="Medical Applications and Research"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-100 mb-8 tracking-tight">
            Application
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Comprehensive solutions for clinical diagnostics, research, and healthcare applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Sub Navigation Component
const SubNavigation = ({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}) => {
  return (
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex flex-wrap justify-center gap-1">
          {applicationSubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-3 ${
                activeSection === item.id
                  ? 'text-[#0A1931] border-amber-500 bg-white shadow-sm'
                  : 'text-gray-600 border-transparent hover:text-[#0A1931] hover:bg-white/50'
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
      </div>
    </section>
  )
}

// Main Application Page Component
export default function ApplicationPage() {
  const [activeSection, setActiveSection] = useState('clinical-diagnostics')

  const getSectionIcon = () => {
    switch (activeSection) {
      case 'clinical-diagnostics': return Microscope
      case 'life-science-research': return Heart
      case 'patient-monitoring': return Stethoscope
      case 'veterinary-solutions': return PawPrint
      default: return Microscope
    }
  }

  const getSectionTitle = () => {
    const section = applicationSubNavigation.find(nav => nav.id === activeSection)
    return section ? section.name : 'Clinical Diagnostics'
  }

  const Icon = getSectionIcon()

  return (
    <>
      <HeroBanner />
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Icon className="w-16 h-16 text-[#0A1931] mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A1931]">
                {getSectionTitle()}
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced solutions tailored for {getSectionTitle().toLowerCase()} applications, 
              designed to meet the highest standards of accuracy and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1931] mb-3 text-center">
                  Solution {item}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Advanced {getSectionTitle().toLowerCase()} solution designed for precision and reliability.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}