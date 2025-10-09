'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Search,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

const productCategories = [
  {
    title: 'Immunoassay',
    items: ['AutoLumo A6200', 'AutoLumo S900', 'CLIA Analyzers']
  },
  {
    title: 'Microbiology',
    items: ['AutoMic-i600', 'Culture Systems', 'ID/AST Analyzers']
  },
  {
    title: 'Molecular',
    items: ['PCR Systems', 'qPCR Analyzers', 'Sequencing']
  },
  {
    title: 'Clinical Chemistry',
    items: ['AutoChem B2000', 'Biochemistry Analyzers', 'Reagents']
  },
  {
    title: 'Quality Control',
    items: ['QC Materials', 'Calibrators', 'Controls']
  }
]

const solutionCategories = [
  {
    title: 'Disease Areas',
    items: ['Endocrine Hormone', 'Women & Children', 'Infection', 'Tumor Markers', 'Cardiovascular', 'Autoimmune Diseases']
  },
  {
    title: 'Laboratory Solutions',
    items: ['Core Lab', 'POCT', 'Remote Diagnostics', 'Lab Automation']
  }
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+1-555-0123</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@analyzebiotech.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Global Headquarters</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe size={14} />
            <select className="bg-transparent border-none text-white text-sm">
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AB</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AnalyzeBiotech</h1>
              <p className="text-sm text-gray-600">Advanced Diagnostics Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <span>Products</span>
                <ChevronDown size={16} className={cn(
                  "transition-transform duration-200",
                  activeDropdown === 'products' && "rotate-180"
                )} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {productCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                            <ul className="space-y-1">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <Link 
                                    href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <span>Solutions</span>
                <ChevronDown size={16} className={cn(
                  "transition-transform duration-200",
                  activeDropdown === 'solutions' && "rotate-180"
                )} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
                  >
                    <div className="p-6">
                      <div className="space-y-4">
                        {solutionCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                            <ul className="space-y-1">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <Link 
                                    href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Items */}
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              News
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>

            {/* Search */}
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-gray-100 pt-4"
            >
              <div className="space-y-4">
                <Link 
                  href="/products" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/solutions" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link 
                  href="/services" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/news" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  href="/about" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar