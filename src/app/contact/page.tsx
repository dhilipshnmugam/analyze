'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

const offices = [
  {
    region: 'North America',
    address: '123 Innovation Drive, Boston, MA 02101, USA',
    phone: '+1 (555) 123-4567',
    email: 'na.sales@analyzebiotech.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST'
  },
  {
    region: 'Europe',
    address: '456 Technology Park, Munich, Germany 80331',
    phone: '+49 89 123 456 78',
    email: 'europe.sales@analyzebiotech.com',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM CET'
  },
  {
    region: 'Asia Pacific',
    address: '789 Science Hub, Singapore 138623',
    phone: '+65 6123 4567',
    email: 'apac.sales@analyzebiotech.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT'
  }
]

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: '24/7 technical support available',
    contact: '+1-800-ANALYZE',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get detailed assistance via email',
    contact: 'support@analyzebiotech.com',
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

export default function ContactPage() {
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
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Get in touch with our team of experts to learn how AnalyzeBiotech 
              can transform your laboratory operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <method.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-blue-600 font-medium mb-3">{method.contact}</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Global Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Offices</h3>
              
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{office.region}</h4>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Phone className="text-gray-400 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Mail className="text-gray-400 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{office.email}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="text-gray-400 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Contact Info */}
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">24/7 Emergency Support</h4>
                <p className="text-blue-100 mb-4">
                  For critical system issues or urgent technical support needs, 
                  our emergency hotline is available around the clock.
                </p>
                <div className="flex items-center space-x-2 text-lg font-medium">
                  <Phone size={20} />
                  <span>+1-800-EMERGENCY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <Globe className="text-gray-400 mx-auto mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Global Presence</h3>
              <p className="text-gray-500">Interactive map coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}