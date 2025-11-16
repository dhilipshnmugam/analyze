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
    <footer className="text-white" style={{ backgroundColor: '#0077B5' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-lg sm:text-xl font-bold">AnalyzeBiotech</h3>
              <p className="text-sm text-gray-400">Advanced Diagnostics</p>
            </div>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Leading the future of in vitro diagnostics with cutting-edge technology, 
              precision instruments, and comprehensive solutions for laboratories worldwide.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">+91 9543910101</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">+91 8144418046</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300 break-all">Sales@analyzebiotech.in</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300 leading-relaxed">1/51, Barathiyar Street, Mundiyampakkam, TamilNadu, India - 605601</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/products#clinical-diagnostics" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                  Clinical Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/products#medical-imaging" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Medical Imaging
                </Link>
              </li>
              <li>
                <Link href="/products#advanced-andrology" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Advanced Andrology
                </Link>
              </li>
              <li>
                <Link href="/products#critical-care" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Critical Care
                </Link>
              </li>
              <li>
                <Link href="/products#sample-tracking" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Sample Tracking
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
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Solutions & Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/capabilities#turnkey-projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Turnkey Projects
                </Link>
              </li>
              <li>
                <Link href="/capabilities#service" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Service Solutions
                </Link>
              </li>
              <li>
                <Link href="/capabilities#supports" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/capabilities#workshops" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/itsolutions" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & News */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/company#company-profile" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/capabilities#media-centre" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/company#leadership-programme" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company#investor-opportunity" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/company#social-responsibilities" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200">
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
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:text-blue-200 transition-all"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:text-red-300 transition-all"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Youtube size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:text-blue-200 transition-all"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:text-blue-200 transition-all"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-8" style={{ backgroundColor: 'rgba(0, 119, 181, 0.8)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-gray-200">Get the latest news, product updates, and industry insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 text-white rounded-lg border border-white/30 focus:border-white focus:outline-none flex-1 md:w-80"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6" style={{ backgroundColor: 'rgba(0, 119, 181, 0.6)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white text-sm">
              © 2024 AnalyzeBiotech. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white">
              <Link href="/legal/privacy" className="hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-gray-200 transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/compliance" className="hover:text-gray-200 transition-colors">
                Compliance
              </Link>
              <Link href="/legal/accessibility" className="hover:text-gray-200 transition-colors">
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