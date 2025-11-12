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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">AnalyzeBiotech</h3>
              <p className="text-sm text-gray-400">Advanced Diagnostics</p>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading the future of in vitro diagnostics with cutting-edge technology, 
              precision instruments, and comprehensive solutions for laboratories worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 9543910101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 8144418046</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">Sales@analyzebiotech.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">1/51, Barathiyar Street, Mundiyampakkam, TamilNadu, India - 605601</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products#clinical-diagnostics" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Clinical Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/products#medical-imaging" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Medical Imaging
                </Link>
              </li>
              <li>
                <Link href="/products#advanced-andrology" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Advanced Andrology
                </Link>
              </li>
              <li>
                <Link href="/products#critical-care" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Critical Care
                </Link>
              </li>
              <li>
                <Link href="/products#sample-tracking" className="text-gray-300 hover:text-blue-400 transition-colors">
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
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Solutions & Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/capabilities#turnkey-projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Turnkey Projects
                </Link>
              </li>
              <li>
                <Link href="/capabilities#service" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Service Solutions
                </Link>
              </li>
              <li>
                <Link href="/capabilities#supports" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/capabilities#workshops" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/itsolutions" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & News */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/company#company-profile" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/capabilities#media-centre" className="text-gray-300 hover:text-blue-400 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/company#leadership-programme" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company#investor-opportunity" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/company#social-responsibilities" className="text-gray-300 hover:text-blue-400 transition-colors">
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