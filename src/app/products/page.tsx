'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid3X3, List } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'AutoLumo A6200',
    category: 'Immunoassay',
    description: 'Fully automated chemiluminescent immunoassay analyzer with high throughput and precision.',
    features: ['High Throughput: 200 tests/hour', 'Random Access Testing', 'STAT Priority', 'Comprehensive Menu'],
    applications: ['Hormone Testing', 'Tumor Markers', 'Cardiac Markers', 'Infectious Disease'],
    certifications: ['ISO 13485', 'CE-IVD', 'FDA 510(k)'],
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'AutoMic-i600',
    category: 'Microbiology',
    description: 'Advanced automated ID/AST analyzer for rapid microbial identification and susceptibility testing.',
    features: ['Rapid Results: 4-6 hours', 'Automated Workflow', 'Extensive Database', 'Expert System'],
    applications: ['Bacterial ID', 'AST Testing', 'Resistance Detection', 'Epidemiology'],
    certifications: ['ISO 13485', 'CE-IVD'],
    badge: 'New'
  },
  {
    id: 3,
    name: 'AutoChem B2000',
    category: 'Clinical Chemistry',
    description: 'Comprehensive clinical chemistry analyzer with multiple testing capabilities.',
    features: ['Multi-Parameter Testing', 'ISE Module', 'Sample Tracking', 'Quality Control'],
    applications: ['Routine Chemistry', 'Lipid Profile', 'Liver Function', 'Kidney Function'],
    certifications: ['ISO 13485', 'CE-IVD', 'CLIA Waived'],
    badge: 'Award Winner'
  },
  {
    id: 4,
    name: 'AutoCoag C3000',
    category: 'Coagulation',
    description: 'Advanced coagulation analyzer for hemostasis testing.',
    features: ['Optical Detection', 'Clot Waveform', 'Auto Dilution', 'STAT Testing'],
    applications: ['PT/INR', 'APTT', 'Fibrinogen', 'D-Dimer'],
    certifications: ['ISO 13485', 'CE-IVD'],
    badge: null
  },
  {
    id: 5,
    name: 'AutoMol M1200',
    category: 'Molecular',
    description: 'Real-time PCR system for molecular diagnostics.',
    features: ['Real-Time Detection', 'Multiplexing', 'Automated Analysis', 'Cloud Connectivity'],
    applications: ['Infectious Disease', 'Genetics', 'Oncology', 'Pharmacogenomics'],
    certifications: ['ISO 13485', 'CE-IVD'],
    badge: null
  },
  {
    id: 6,
    name: 'AutoQC Suite',
    category: 'Quality Control',
    description: 'Comprehensive quality control solutions for all testing areas.',
    features: ['Multi-Level Controls', 'Statistical Analysis', 'Trend Monitoring', 'Peer Comparison'],
    applications: ['Quality Assurance', 'Performance Monitoring', 'Compliance', 'Training'],
    certifications: ['ISO 17511', 'CLSI Guidelines'],
    badge: null
  }
]

const categories = ['All', 'Immunoassay', 'Microbiology', 'Clinical Chemistry', 'Coagulation', 'Molecular', 'Quality Control']

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-6xl text-blue-300">🔬</div>
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="text-sm text-blue-600 font-medium mb-1">{product.category}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Applications:</h4>
          <div className="flex flex-wrap gap-1">
            {product.applications.slice(0, 3).map((app, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Certifications:</h4>
          <div className="flex flex-wrap gap-1">
            {product.certifications.map((cert, idx) => (
              <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  )
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive diagnostic solutions designed to enhance laboratory efficiency 
            and deliver precise, reliable results across all testing disciplines.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full lg:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2 w-full lg:w-auto">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-auto"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Grid3X3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}