import React, { useState } from 'react'
import { Star, MapPin, Shield, Plus, Filter, Package, Award } from 'lucide-react'
import { Product } from '../types'

interface ProductGridProps {
  onProductClick: (product: Product) => void
  onAddToCart: (product: Product) => void
  isAuthenticated: boolean
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, onAddToCart, isAuthenticated }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedCertification, setSelectedCertification] = useState<string>('all')

  const products: Product[] = [
    {
      id: '1',
      name: 'Organic Avocados',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop',
      vendor: 'Green Valley Farms',
      tags: ['fruits', 'organic', 'vegan'],
      origin: 'California, USA',
      certifications: ['USDA Organic', 'Non-Halal', 'Local'],
      supplyChain: [
        { id: '1', step: 'Harvested', location: 'Green Valley Farm, CA', timestamp: '2024-01-15', verified: true },
        { id: '2', step: 'Processed', location: 'Organic Processing Center, CA', timestamp: '2024-01-16', verified: true },
        { id: '3', step: 'Shipped', location: 'Distribution Hub, CA', timestamp: '2024-01-17', verified: true }
      ],
      description: 'Premium organic avocados grown with sustainable farming practices.',
      rating: 4.8,
      reviews: 124
    },
    {
      id: '2',
      name: 'Halal Grass-Fed Beef',
      price: 28.50,
      image: 'https://images.unsplash.com/photo-1588347818121-d3b6b4d0b4b3?w=400&h=300&fit=crop',
      vendor: 'Crescent Moon Ranch',
      tags: ['meat', 'grass-fed'],
      origin: 'Texas, USA',
      certifications: ['Halal Certified', 'Grass-Fed', 'Local'],
      supplyChain: [
        { id: '1', step: 'Raised', location: 'Crescent Moon Ranch, TX', timestamp: '2024-01-10', verified: true },
        { id: '2', step: 'Processed', location: 'Halal Processing Plant, TX', timestamp: '2024-01-14', verified: true },
        { id: '3', step: 'Packaged', location: 'Cold Storage Facility, TX', timestamp: '2024-01-15', verified: true }
      ],
      description: 'Premium halal grass-fed beef from ethically raised cattle.',
      rating: 4.9,
      reviews: 89
    },
    {
      id: '3',
      name: 'Wild Alaskan Salmon',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop',
      vendor: 'Pacific Catch Co.',
      tags: ['seafood', 'wild-caught', 'sustainable'],
      origin: 'Alaska, USA',
      certifications: ['MSC Certified', 'Non-Halal', 'Local'],
      supplyChain: [
        { id: '1', step: 'Caught', location: 'Bristol Bay, AK', timestamp: '2024-01-12', verified: true },
        { id: '2', step: 'Processed', location: 'Seafood Processing Plant, AK', timestamp: '2024-01-13', verified: true },
        { id: '3', step: 'Flash Frozen', location: 'Cold Storage, AK', timestamp: '2024-01-13', verified: true }
      ],
      description: 'Wild-caught Alaskan salmon, rich in omega-3 fatty acids.',
      rating: 4.7,
      reviews: 156
    },
    {
      id: '4',
      name: 'Heirloom Tomatoes',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop',
      vendor: 'Heritage Gardens',
      tags: ['vegetables', 'heirloom', 'organic'],
      origin: 'Oregon, USA',
      certifications: ['Organic', 'Non-Halal', 'Local'],
      supplyChain: [
        { id: '1', step: 'Grown', location: 'Heritage Gardens, OR', timestamp: '2024-01-16', verified: true },
        { id: '2', step: 'Harvested', location: 'Heritage Gardens, OR', timestamp: '2024-01-17', verified: true },
        { id: '3', step: 'Packed', location: 'Farm Packing House, OR', timestamp: '2024-01-17', verified: true }
      ],
      description: 'Colorful heirloom tomatoes with exceptional flavor and nutrition.',
      rating: 4.6,
      reviews: 78
    },
    {
      id: '5',
      name: 'Raw Honey',
      price: 16.75,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
      vendor: 'Golden Hive Apiary',
      tags: ['pantry', 'raw', 'unfiltered'],
      origin: 'Montana, USA',
      certifications: ['Raw', 'Non-Halal', 'Local'],
      supplyChain: [
        { id: '1', step: 'Collected', location: 'Golden Hive Apiary, MT', timestamp: '2024-01-14', verified: true },
        { id: '2', step: 'Extracted', location: 'Honey House, MT', timestamp: '2024-01-15', verified: true },
        { id: '3', step: 'Jarred', location: 'Packaging Facility, MT', timestamp: '2024-01-16', verified: true }
      ],
      description: 'Pure raw honey from wildflower meadows in Montana.',
      rating: 4.9,
      reviews: 203
    },
    {
      id: '6',
      name: 'Organic Quinoa',
      price: 11.25,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      vendor: 'Andean Harvest',
      tags: ['grains', 'organic', 'gluten-free'],
      origin: 'Bolivia',
      certifications: ['Fair Trade', 'Organic', 'Non-Halal', 'International'],
      supplyChain: [
        { id: '1', step: 'Harvested', location: 'Altiplano Region, Bolivia', timestamp: '2024-01-08', verified: true },
        { id: '2', step: 'Processed', location: 'Processing Center, Bolivia', timestamp: '2024-01-10', verified: true },
        { id: '3', step: 'Exported', location: 'Port of Entry, USA', timestamp: '2024-01-14', verified: true }
      ],
      description: 'Premium organic quinoa from Bolivian highlands, fair trade certified.',
      rating: 4.8,
      reviews: 167
    },
    {
      id: '7',
      name: 'Halal Chicken Breast',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
      vendor: 'Crescent Poultry',
      tags: ['meat', 'poultry', 'free-range'],
      origin: 'Michigan, USA',
      certifications: ['Halal Certified', 'Free-Range', 'Local'],
      supplyChain: [
        { id: '1', step: 'Raised', location: 'Crescent Poultry Farm, MI', timestamp: '2024-01-12', verified: true },
        { id: '2', step: 'Processed', location: 'Halal Processing Plant, MI', timestamp: '2024-01-16', verified: true },
        { id: '3', step: 'Packaged', location: 'Cold Storage Facility, MI', timestamp: '2024-01-17', verified: true }
      ],
      description: 'Fresh halal chicken breast from free-range, ethically raised poultry.',
      rating: 4.7,
      reviews: 92
    },
    {
      id: '8',
      name: 'International Dates',
      price: 22.50,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      vendor: 'Desert Gold Imports',
      tags: ['fruits', 'dried', 'premium'],
      origin: 'Saudi Arabia',
      certifications: ['Halal Certified', 'Premium Grade', 'International'],
      supplyChain: [
        { id: '1', step: 'Harvested', location: 'Al-Ahsa Oasis, Saudi Arabia', timestamp: '2024-01-05', verified: true },
        { id: '2', step: 'Processed', location: 'Date Processing Center, Saudi Arabia', timestamp: '2024-01-07', verified: true },
        { id: '3', step: 'Exported', location: 'Port of Entry, USA', timestamp: '2024-01-12', verified: true }
      ],
      description: 'Premium Medjool dates from Saudi Arabia, naturally sweet and nutritious.',
      rating: 4.9,
      reviews: 145
    }
  ]

  const categories = [
    { id: 'all', label: 'All Categories', icon: Package },
    { id: 'fruits', label: 'Fruits', icon: Package },
    { id: 'vegetables', label: 'Vegetables', icon: Package },
    { id: 'meat', label: 'Meat', icon: Package },
    { id: 'seafood', label: 'Seafood', icon: Package },
    { id: 'grains', label: 'Grains', icon: Package },
    { id: 'pantry', label: 'Pantry', icon: Package }
  ]

  const certifications = [
    { id: 'all', label: 'All Certifications', icon: Award },
    { id: 'halal', label: 'Halal', icon: Award },
    { id: 'non-halal', label: 'Non-Halal', icon: Award },
    { id: 'local', label: 'Local', icon: Award },
    { id: 'international', label: 'International', icon: Award }
  ]

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.tags.includes(selectedCategory)
    
    let certificationMatch = true
    if (selectedCertification !== 'all') {
      if (selectedCertification === 'halal') {
        certificationMatch = product.certifications.some(cert => cert.toLowerCase().includes('halal'))
      } else if (selectedCertification === 'non-halal') {
        certificationMatch = product.certifications.some(cert => cert.toLowerCase().includes('non-halal'))
      } else if (selectedCertification === 'local') {
        certificationMatch = product.certifications.some(cert => cert.toLowerCase().includes('local'))
      } else if (selectedCertification === 'international') {
        certificationMatch = product.certifications.some(cert => cert.toLowerCase().includes('international'))
      }
    }
    
    return categoryMatch && certificationMatch
  })

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium food products with complete traceability and verified authenticity
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-6 mb-12">
          {/* Product Categories */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Package className="h-5 w-5 text-blue-600" />
              <span>Product Categories</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl border border-white/30 p-1 shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-green-600" />
              <span>Certifications & Origin</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl border border-white/30 p-1 shadow-lg">
                {certifications.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCertification(cert.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCertification === cert.id
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
                    }`}
                  >
                    {cert.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedCertification !== 'all') && (
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 text-sm bg-blue-100/80 text-blue-800 rounded-full backdrop-blur-sm">
                  {categories.find(c => c.id === selectedCategory)?.label}
                </span>
              )}
              {selectedCertification !== 'all' && (
                <span className="px-3 py-1 text-sm bg-green-100/80 text-green-800 rounded-full backdrop-blur-sm">
                  {certifications.find(c => c.id === selectedCertification)?.label}
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedCertification('all')
                }}
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex flex-wrap gap-1">
                        {/* Show Halal/Non-Halal status prominently */}
                        {product.certifications.some(cert => cert.toLowerCase().includes('halal')) && (
                          <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                            product.certifications.some(cert => cert.toLowerCase() === 'halal certified')
                              ? 'bg-green-500/90 text-white'
                              : 'bg-red-500/90 text-white'
                          }`}>
                            {product.certifications.some(cert => cert.toLowerCase() === 'halal certified') ? 'Halal' : 'Non-Halal'}
                          </span>
                        )}
                        {/* Show Local/International status */}
                        {(product.certifications.some(cert => cert.toLowerCase().includes('local')) || 
                          product.certifications.some(cert => cert.toLowerCase().includes('international'))) && (
                          <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                            product.certifications.some(cert => cert.toLowerCase().includes('local'))
                              ? 'bg-blue-500/90 text-white'
                              : 'bg-purple-500/90 text-white'
                          }`}>
                            {product.certifications.some(cert => cert.toLowerCase().includes('local')) ? 'Local' : 'International'}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1 backdrop-blur-sm">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium text-gray-700">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <span className="text-lg font-bold text-green-600">${product.price}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{product.vendor}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{product.certifications.length} certs</span>
                      </div>
                      <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => onProductClick(product)}
                        className="flex-1 py-2 px-4 bg-white/20 hover:bg-white/30 text-gray-700 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm border border-white/30"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="p-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl transition-all duration-200 shadow-lg"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="relative group max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-500/10 rounded-3xl blur-xl" />
              <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
                <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedCertification('all')
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
