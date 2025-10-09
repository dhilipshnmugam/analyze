'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AnalyzeBiotech</h3>
                <p className="text-sm text-gray-400">Advanced Diagnostics</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading the future of in vitro diagnostics with cutting-edge technology, 
              precision instruments, and comprehensive solutions for laboratories worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+1-555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@analyzebiotech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Global Headquarters, USA</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products/immunoassay" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Immunoassay Systems
                </Link>
              </li>
              <li>
                <Link href="/products/microbiology" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Microbiology Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/molecular" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Molecular Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/products/clinical-chemistry" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Clinical Chemistry
                </Link>
              </li>
              <li>
                <Link href="/products/quality-control" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1">
                  <span>View All Products</span>
                  <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Solutions & Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/disease-areas" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Disease Area Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/laboratory" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Laboratory Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & News */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-blue-400 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-gray-700 transition-all"
                >
                  <Youtube size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-gray-400">Get the latest news, product updates, and industry insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none flex-1 md:w-80"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 AnalyzeBiotech. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/legal/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/compliance" className="hover:text-white transition-colors">
                Compliance
              </Link>
              <Link href="/legal/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer