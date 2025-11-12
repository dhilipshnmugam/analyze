'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  Globe,
  Users,
  MessageCircle
} from 'lucide-react'

// Sub-navigation items for contact sections
const contactSubNavigation = [
  { id: 'contact-form', name: 'Send Message' },
  { id: 'global-offices', name: 'Global Offices' },
  { id: 'support-channels', name: 'Support Channels' },
  { id: 'emergency-support', name: 'Emergency Support' }
]

const offices = [
  {
    region: 'India Office',
    address: '1/51, Barathiyar Street, Mundiyampakkam, TamilNadu, India - 605601',
    phone: '+91 9543910101, +91 8144418046',
    email: 'Sales@analyzebiotech.in',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
  }
]

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: '24/7 technical support available',
    contact: '+91 9543910101, +91 8144418046',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get detailed assistance via email',
    contact: 'Sales@analyzebiotech.in',
    action: 'Send Email'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant support during business hours',
    contact: 'Chat with us',
    action: 'Start Chat'
  },
  {
    icon: Users,
    title: 'Schedule Meeting',
    description: 'Book a consultation with our experts',
    contact: 'Product specialists available',
    action: 'Book Meeting'
  }
]

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/85 via-[#0A1931]/75 to-teal-900/85 z-10"></div>
        <Image
          src="/images/background.jpg"
          alt="Contact AnalyzeBiotech"
          fill
          className="object-cover object-center"
          priority
          quality={75}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-100 mb-8 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our team of experts to learn how AnalyzeBiotech 
            can transform your laboratory operations.
          </p>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-orange-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full opacity-80 animate-ping"></div>
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
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex flex-wrap justify-center gap-2">
          {contactSubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-4 py-3 font-semibold text-sm transition-all duration-300 rounded-t-lg overflow-hidden ${
                activeSection === item.id
                  ? 'text-[#0A1931] bg-white shadow-md'
                  : 'text-gray-600 hover:text-[#0A1931] hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Gold/Bronze accent underline for active item */}
              <motion.div
                initial={false}
                animate={{
                  scaleX: activeSection === item.id ? 1 : 0,
                  opacity: activeSection === item.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 origin-left"
              />
            </motion.button>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState('contact-form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'general'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Sub Navigation */}
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Contact Form Section */}
            {activeSection === 'contact-form' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-xl text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="immunoassay">Immunoassay Systems</option>
                        <option value="microbiology">Microbiology Solutions</option>
                        <option value="clinical-chemistry">Clinical Chemistry</option>
                        <option value="molecular">Molecular Diagnostics</option>
                        <option value="quality-control">Quality Control</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Please describe your inquiry in detail..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Global Offices Section */}
            {activeSection === 'global-offices' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Offices</h2>
                  <p className="text-xl text-gray-600">
                    Visit us at one of our offices worldwide
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Building2 className="text-blue-600" size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.region}</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                          <span className="text-gray-600">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="text-gray-400 flex-shrink-0" size={18} />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="text-gray-400 flex-shrink-0" size={18} />
                          <span className="text-gray-600 break-all">{office.email}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="text-gray-400 flex-shrink-0" size={18} />
                          <span className="text-gray-600">{office.hours}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12 bg-gray-100 rounded-xl h-96 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Globe className="text-gray-400 mx-auto mb-4" size={64} />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Global Presence</h3>
                    <p className="text-gray-500">Interactive map coming soon</p>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Support Channels Section */}
            {activeSection === 'support-channels' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
                  <p className="text-xl text-gray-600">
                    Choose the communication method that works best for you
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow group cursor-pointer"
                    >
                      <div className="w-20 h-20 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mb-6 transition-colors">
                        <method.icon className="text-blue-600" size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                      <p className="text-gray-600 mb-4 text-lg">{method.description}</p>
                      <div className="text-blue-600 font-semibold mb-4 text-lg">{method.contact}</div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        {method.action}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Emergency Support Section */}
            {activeSection === 'emergency-support' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">24/7 Emergency Support</h2>
                  <p className="text-xl text-gray-600">
                    Critical support when you need it most
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-12 shadow-xl">
                  <div className="text-center mb-8">
                    <Phone className="mx-auto mb-6" size={64} />
                    <h3 className="text-3xl font-bold mb-4">Emergency Hotline</h3>
                    <p className="text-xl text-red-100 mb-8">
                      For critical system issues or urgent technical support needs, 
                      our emergency hotline is available around the clock.
                    </p>
                    <div className="text-4xl font-bold mb-2">+91 9543910101</div>
                    <div className="text-4xl font-bold mb-6">+91 8144418046</div>
                    <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors">
                      Call Emergency Support
                    </button>
                  </div>

                  <div className="border-t border-red-500 pt-8 mt-8">
                    <h4 className="text-xl font-semibold mb-4">What qualifies as an emergency?</h4>
                    <ul className="space-y-2 text-red-100">
                      <li>• Complete system failure affecting patient care</li>
                      <li>• Critical diagnostic errors requiring immediate attention</li>
                      <li>• Safety-related equipment malfunction</li>
                      <li>• Data loss or corruption in critical systems</li>
                      <li>• Urgent calibration or quality control issues</li>
                    </ul>
                  </div>

                  <div className="border-t border-red-500 pt-8 mt-8">
                    <h4 className="text-xl font-semibold mb-4">Response Time Guarantee</h4>
                    <p className="text-red-100">
                      Emergency calls are answered within 2 minutes, 24/7/365. 
                      On-site support available within 4 hours for critical issues.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Emergency Contact</h4>
                    <div className="space-y-2 text-gray-700">
                      <div><strong>Phone:</strong> +91 9543910101, +91 8144418046</div>
                      <div><strong>Address:</strong> 1/51, Barathiyar Street, Mundiyampakkam, TamilNadu, India - 605601</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Email Emergency Support</h4>
                    <div className="space-y-2 text-gray-700">
                      <div><strong>Critical Issues:</strong></div>
                      <div>Sales@analyzebiotech.in</div>
                      <div className="text-sm text-gray-600 mt-2">
                        Monitored 24/7 with 15-minute response time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
