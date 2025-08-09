import React from 'react'
import { Leaf, Mail, MessageCircle, FileText, Shield } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 shadow-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                FoodChain
              </span>
            </div>
            <p className="text-gray-600">
              Revolutionizing food supply chains with blockchain transparency and community governance.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#marketplace" className="hover:text-gray-800 transition-colors">Marketplace</a></li>
              <li><a href="#vendors" className="hover:text-gray-800 transition-colors">Vendors</a></li>
              <li><a href="#certifications" className="hover:text-gray-800 transition-colors">Certifications</a></li>
              <li><a href="#supply-chain" className="hover:text-gray-800 transition-colors">Supply Chain</a></li>
            </ul>
          </div>

          {/* DAO */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">DAO</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#governance" className="hover:text-gray-800 transition-colors">Governance</a></li>
              <li><a href="#proposals" className="hover:text-gray-800 transition-colors">Proposals</a></li>
              <li><a href="#treasury" className="hover:text-gray-800 transition-colors">Treasury</a></li>
              <li><a href="#voting" className="hover:text-gray-800 transition-colors">Voting</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#help" className="hover:text-gray-800 transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-gray-800 transition-colors">Contact</a></li>
              <li><a href="#docs" className="hover:text-gray-800 transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div id="about" className="mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
            <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Have questions about our platform? Want to become a verified vendor? 
                  We'd love to hear from you.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">hello@foodchain.dao</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Discord</h4>
                  <p className="text-gray-600">Join our community</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Documentation</h4>
                  <p className="text-gray-600">Learn more about Web3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2024 FoodChain DAO. Built with transparency and trust.
          </p>
          <div className="flex items-center space-x-6 text-gray-600">
            <a href="#privacy" className="hover:text-gray-800 transition-colors flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>Privacy</span>
            </a>
            <a href="#terms" className="hover:text-gray-800 transition-colors">Terms</a>
            <a href="#security" className="hover:text-gray-800 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
