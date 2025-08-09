import React from 'react'
import { X, Minus, Plus, Trash2, CreditCard } from 'lucide-react'
import { Product } from '../types'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: Product[]
  onRemoveItem: (productId: string) => void
  isAuthenticated: boolean
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem,
  isAuthenticated 
}) => {
  if (!isOpen) return null

  const total = items.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert('Please connect your wallet to proceed with checkout')
      return
    }
    alert('Redirecting to secure checkout...')
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md z-50">
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
          <div className="relative h-full backdrop-blur-xl bg-white/20 border-l border-white/30 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600">Your cart is empty</p>
                  <p className="text-sm text-gray-500 mt-1">Add some products to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.vendor}</p>
                          <p className="text-lg font-bold text-green-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 rounded-lg hover:bg-red-100/20 text-red-600 transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
                >
                  Proceed to Checkout
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Secure payment with blockchain verification
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartSidebar
