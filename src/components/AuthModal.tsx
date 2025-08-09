import React, { useState } from 'react'
import { X, Wallet, Mail, Github, Facebook } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onAuthenticated: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleAuth = async (method: string) => {
    setIsLoading(true)
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      onAuthenticated()
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
        <div className="relative backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-8 w-full max-w-md">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Connect Wallet</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <p className="text-gray-600 mb-8 text-center">
            Connect your wallet or sign in with social media to start shopping
          </p>

          {/* Auth Options */}
          <div className="space-y-4">
            {/* zkLogin Wallet */}
            <button
              onClick={() => handleAuth('wallet')}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg disabled:opacity-50"
            >
              <Wallet className="h-5 w-5" />
              <span>{isLoading ? 'Connecting...' : 'Connect Wallet (zkLogin)'}</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/10 text-gray-500 rounded-lg backdrop-blur-sm">Or continue with</span>
              </div>
            </div>

            {/* Social Login Options */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAuth('google')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 p-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-200 disabled:opacity-50"
              >
                <Mail className="h-4 w-4" />
                <span>Google</span>
              </button>

              <button
                onClick={() => handleAuth('github')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 p-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-200 disabled:opacity-50"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </button>
            </div>

            <button
              onClick={() => handleAuth('facebook')}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-200 disabled:opacity-50"
            >
              <Facebook className="h-4 w-4" />
              <span>Continue with Facebook</span>
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-6">
            By connecting, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
