import React from 'react'
import { X, Star, MapPin, Shield, Award, Truck, ShoppingCart } from 'lucide-react'
import { Product } from '../types'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
  onAddToCart: (product: Product) => void
  isAuthenticated: boolean
}

const ProductModal: React.FC<ProductModalProps> = ({ 
  isOpen, 
  onClose, 
  product, 
  onAddToCart,
  isAuthenticated 
}) => {
  if (!isOpen || !product) return null

  const handleMintNFT = () => {
    // Simulate NFT minting
    alert('NFT Certificate minted successfully!')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
        <div className="relative backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium bg-white/90 text-gray-700 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 p-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-green-600" />
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 text-sm bg-green-100/80 text-green-800 rounded-full backdrop-blur-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-green-600">${product.price}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-800">{product.rating}</span>
                    </div>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Vendor Info */}
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">{product.vendor}</p>
                      <p className="text-sm text-gray-600">{product.origin}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                {/* Supply Chain */}
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 p-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-blue-600" />
                    Supply Chain Tracking
                  </h4>
                  <div className="space-y-3">
                    {product.supplyChain.map((step, index) => (
                      <div key={step.id} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${step.verified ? 'bg-green-500' : 'bg-gray-400'}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-800">{step.step}</span>
                            {step.verified && <Shield className="h-4 w-4 text-green-600" />}
                          </div>
                          <p className="text-sm text-gray-600">{step.location}</p>
                          <p className="text-xs text-gray-500">{step.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>

                  {isAuthenticated && (
                    <button
                      onClick={handleMintNFT}
                      className="w-full py-3 px-6 backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 rounded-xl font-medium hover:bg-white/30 transition-all duration-200"
                    >
                      Mint NFT Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
