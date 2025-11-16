'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react'

// Category to route mapping
const categoryRoutes: { [key: string]: string } = {
  'Company': '/company',
  'Products': '/products',
  'Application': '/application',
  'Capabilities': '/capabilities',
  'IT Solutions': '/itsolutions',
  'Contact Us': '/contact',
  'Legal Tenders': '/legal'
}

const menuData = {
  Company: [
    'Company Profile',
    'Social Responsibilities',
    'Leadership Programme',
    'Investor Opportunity',
    'Our Vision',
    'Our Mission',
    'Our Culture',
    'Our Integrity',
    'Testimonials'
  ],
  Products: [
    'Clinical Diagnostics Automations',
    'Medical Imaging Sciences',
    'Advanced Andrology',
    'Transfusion Medicine',
    'Stemcel Research and Medicine',
    'Critical Care Solutions',
    'Sample Tracking Automation',
    'Analytical Laboratory Automations'
  ],
  Application: [
    'Clinical Diagnostics',
    'Life Science Research',
    'Patient Monitoring',
    'Veterinary Solutions'
  ],
  Capabilities: [
    'Turnkey Projects',
    'Service',
    'Supports',
    'Knowledge Centre',
    'Digital Learning Platforms',
    'Skill Centre',
    'Downloads',
    'Workshops',
    'Media Centre',
    'Blogs'
  ],
  'IT Solutions': [
    'Clinical Diagnostics Managements',
    'Hospital Management',
    'Research and Development Laboratory Management'
  ],
  'Contact Us': [
    'Inquire Now',
    'Technical Support',
    'Sales Offices',
    'Find a Distributor'
  ],
  'Legal Tenders': [
    'Our Sales Policy',
    'Our Service Policy',
    'Warranty Policy',
    'Integrity Policy',
    'Declaimers',
    'Cookies Policy'
  ]
}

const Navbar = () => {
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false)

  const toggleFullScreenMenu = () => setIsFullScreenMenuOpen(!isFullScreenMenuOpen)

  return (
    <>
      {/* Transparent Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        {/* Main Navigation with responsive padding */}
        <nav className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
          <div className="flex justify-between items-center">
            {/* Logo with responsive sizing */}
            <Link href="/" className="flex items-center">
              <div className="text-left">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight">AnalyzeBiotech</h1>
              </div>
            </Link>

            {/* Menu Button with responsive sizing */}
            <div className="flex items-center">
              <button
                onClick={toggleFullScreenMenu}
                className="flex items-center justify-center space-x-1 sm:space-x-2 bg-slate-900/90 backdrop-blur-sm text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-lg border border-slate-700/50 text-center"
              >
                <Menu size={16} className="sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">Menu</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-Screen Royal Business Menu Overlay */}
      <AnimatePresence>
        {isFullScreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: '#0077B5' }}
          >
            <div className="absolute inset-0 backdrop-blur-sm">
              
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 md:p-8 border-b border-slate-700/50">
                {/* Branding */}
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">AnalyzeBiotech</h1>
                </div>

                {/* Prominent Close Button */}
                <button
                  onClick={toggleFullScreenMenu}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-xl flex items-center justify-center text-slate-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25"
                >
                  <X size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 font-bold" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4 sm:p-6 md:p-8 h-full overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    
                    {Object.entries(menuData).map(([category, items]) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Object.keys(menuData).indexOf(category) * 0.05, ease: "easeOut" }}
                        className="space-y-3 sm:space-y-4 md:space-y-6"
                      >
                        {/* Category Header - Now a Link */}
                        <Link
                          href={categoryRoutes[category]}
                          onClick={toggleFullScreenMenu}
                          className="block"
                        >
                          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer border-b border-amber-500/30 pb-2 sm:pb-3 text-left tracking-wide group">
                            <span className="relative">
                              {category}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </span>
                          </h2>
                        </Link>
                        
                        {/* Category Links */}
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          {items.map((item, index) => (
                              <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.2, 
                                delay: (Object.keys(menuData).indexOf(category) * 0.05) + (index * 0.02),
                                ease: "easeOut"
                              }}
                            >
                              <Link
                                href={`${categoryRoutes[category]}#${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                                onClick={toggleFullScreenMenu}
                                className="block text-gray-300 hover:text-amber-400 hover:pl-2 sm:hover:pl-4 transition-all duration-300 text-sm sm:text-base font-medium leading-relaxed text-left group"
                              >
                                <span className="relative">
                                  {item}
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="mt-10 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-amber-500/30"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
                      <div className="flex flex-col space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                          <Phone className="text-yellow-400" size={18} />
                          <span className="text-gray-300 font-medium text-sm sm:text-base">+91 9543910101</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                          <Phone className="text-yellow-400" size={18} />
                          <span className="text-gray-300 font-medium text-sm sm:text-base">+91 8144418046</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                        <Mail className="text-yellow-400" size={18} />
                        <span className="text-gray-300 font-medium text-sm sm:text-base break-all">Sales@analyzebiotech.in</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                        <MapPin className="text-yellow-400 flex-shrink-0" size={18} />
                        <span className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">1/51, Barathiyar Street, Mundiyampakkam, TamilNadu, India - 605601</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar