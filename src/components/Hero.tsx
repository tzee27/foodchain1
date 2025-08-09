import React from 'react'
import { Shield, Leaf, Users, Search } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Food
            </span>
            <br />
            <span className="text-gray-800">Supply Chain</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover traceable, certified food products with complete supply chain transparency. 
            Connect directly with verified vendors and mint NFT certificates for authenticity.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative backdrop-blur-xl bg-white/20 rounded-2xl border border-white/30 shadow-2xl p-2">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-gray-500 ml-4" />
                  <input
                    type="text"
                    placeholder="Search for organic fruits, halal meat, local produce..."
                    className="flex-1 px-4 py-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Halal', 'Organic', 'Local', 'Vegan', 'Gluten-Free', 'Fair Trade'].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Verified Authenticity</h3>
                <p className="text-gray-600">Every product comes with blockchain-verified certificates and complete supply chain tracking.</p>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Sourcing</h3>
                <p className="text-gray-600">Support eco-friendly vendors committed to sustainable farming and ethical practices.</p>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Governed</h3>
                <p className="text-gray-600">Participate in DAO governance to approve vendors, set standards, and manage the ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
