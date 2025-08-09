import React from 'react'
import { ShoppingCart, User, Leaf, Vote } from 'lucide-react'

interface HeaderProps {
  isAuthenticated: boolean
  onAuthClick: () => void
  onCartClick: () => void
  cartItemsCount: number
  activeSection: 'marketplace' | 'dao'
  onSectionChange: (section: 'marketplace' | 'dao') => void
}

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onAuthClick,
  onCartClick,
  cartItemsCount,
  activeSection,
  onSectionChange
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 shadow-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              FoodChain
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => onSectionChange('marketplace')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeSection === 'marketplace'
                  ? 'bg-white/20 text-gray-900 shadow-lg backdrop-blur-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/10'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => onSectionChange('dao')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeSection === 'dao'
                  ? 'bg-white/20 text-gray-900 shadow-lg backdrop-blur-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/10'
              }`}
            >
              <Vote className="h-4 w-4" />
              <span>DAO</span>
            </button>
            <a
              href="#about"
              className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-gray-900 hover:bg-white/10 transition-all duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-gray-900 hover:bg-white/10 transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Auth */}
            <button
              onClick={onAuthClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <User className="h-4 w-4" />
              <span>{isAuthenticated ? 'Profile' : 'Connect'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
