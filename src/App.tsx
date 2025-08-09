import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import ProductModal from './components/ProductModal'
import CartSidebar from './components/CartSidebar'
import DAOSection from './components/DAOSection'
import { Product } from './types'

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [activeSection, setActiveSection] = useState<'marketplace' | 'dao'>('marketplace')

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const handleAddToCart = (product: Product) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true)
      return
    }
    setCartItems(prev => [...prev, product])
  }

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 font-inter">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-cyan-100/20 pointer-events-none" />
      
      <Header 
        isAuthenticated={isAuthenticated}
        onAuthClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartItemsCount={cartItems.length}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <main className="relative z-10">
        {activeSection === 'marketplace' ? (
          <>
            <Hero />
            <ProductGrid 
              onProductClick={handleProductClick}
              onAddToCart={handleAddToCart}
              isAuthenticated={isAuthenticated}
            />
          </>
        ) : (
          <DAOSection isAuthenticated={isAuthenticated} />
        )}
      </main>
      
      <Footer />
      
      {/* Modals and Sidebars */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthenticated={() => setIsAuthenticated(true)}
      />
      
      <ProductModal 
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        isAuthenticated={isAuthenticated}
      />
      
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        isAuthenticated={isAuthenticated}
      />
    </div>
  )
}

export default App
