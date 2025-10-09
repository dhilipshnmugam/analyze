'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Award, Users, Globe, TrendingUp } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-blue-400"></div>
                <span className="text-blue-200 font-medium">Advanced Diagnostics</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Revolutionizing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  {" "}Healthcare
                </span>
                <br />
                Through Innovation
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Leading the future of in vitro diagnostics with cutting-edge technology, 
                precision instruments, and comprehensive solutions for laboratories worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Explore Products</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-blue-200">25+</div>
                <div className="text-sm text-blue-300">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-blue-200">100+</div>
                <div className="text-sm text-blue-300">Countries Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-blue-200">5000+</div>
                <div className="text-sm text-blue-300">Laboratories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-blue-200">500+</div>
                <div className="text-sm text-blue-300">Products</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Device Mockup */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                  <div className="h-2 bg-green-400 rounded w-1/2"></div>
                  <div className="h-2 bg-purple-400 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <Award className="text-blue-600 mb-2" size={24} />
                  <div className="text-sm font-semibold text-gray-800">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assured</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <Users className="text-green-600 mb-2" size={24} />
                  <div className="text-sm font-semibold text-gray-800">Expert Support</div>
                  <div className="text-xs text-gray-600">24/7 Available</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <Globe className="text-purple-600 mb-2" size={24} />
                  <div className="text-sm font-semibold text-gray-800">Global Reach</div>
                  <div className="text-xs text-gray-600">Worldwide Network</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <TrendingUp className="text-orange-600 mb-2" size={24} />
                  <div className="text-sm font-semibold text-gray-800">Innovation</div>
                  <div className="text-xs text-gray-600">Cutting Edge</div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-80"
            ></motion.div>
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,100 C150,120 350,0 600,50 C850,100 1050,-20 1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection