import React, { useState } from 'react'
import { Vote, Users, Coins, Clock, CheckCircle, XCircle, Plus } from 'lucide-react'
import { DAOProposal } from '../types'

interface DAOSectionProps {
  isAuthenticated: boolean
}

const DAOSection: React.FC<DAOSectionProps> = ({ isAuthenticated }) => {
  const [activeTab, setActiveTab] = useState<'proposals' | 'treasury' | 'governance'>('proposals')

  const proposals: DAOProposal[] = [
    {
      id: '1',
      title: 'Approve New Vendor: Organic Valley Co-op',
      description: 'Proposal to approve Organic Valley Co-op as a verified vendor. They specialize in organic dairy products and have all required certifications.',
      type: 'vendor',
      votes: { for: 1247, against: 89 },
      status: 'active',
      endDate: '2024-02-15',
      proposer: '0x1234...5678'
    },
    {
      id: '2',
      title: 'Add "Carbon Neutral" Tag Category',
      description: 'Introduce a new product tag for carbon-neutral certified products to help environmentally conscious consumers.',
      type: 'tag',
      votes: { for: 892, against: 156 },
      status: 'active',
      endDate: '2024-02-12',
      proposer: '0x9876...5432'
    },
    {
      id: '3',
      title: 'Treasury Allocation for Marketing Campaign',
      description: 'Allocate 50,000 FOOD tokens from treasury for Q1 marketing campaign to increase platform adoption.',
      type: 'treasury',
      votes: { for: 2341, against: 567 },
      status: 'passed',
      endDate: '2024-01-28',
      proposer: '0xabcd...efgh'
    }
  ]

  const handleVote = (proposalId: string, vote: 'for' | 'against') => {
    if (!isAuthenticated) {
      alert('Please connect your wallet to vote')
      return
    }
    alert(`Vote "${vote}" recorded for proposal ${proposalId}`)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-blue-600" />
      case 'passed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100/80 text-blue-800'
      case 'passed':
        return 'bg-green-100/80 text-green-800'
      case 'rejected':
        return 'bg-red-100/80 text-red-800'
      default:
        return 'bg-gray-100/80 text-gray-800'
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DAO Governance
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participate in decentralized governance. Vote on vendor approvals, product standards, and treasury decisions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 text-center shadow-2xl">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">2,847</div>
              <div className="text-gray-600">Active Voters</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 text-center shadow-2xl">
              <Vote className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">47</div>
              <div className="text-gray-600">Total Proposals</div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 text-center shadow-2xl">
              <Coins className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">1.2M</div>
              <div className="text-gray-600">FOOD Tokens</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-xl bg-white/20 rounded-2xl border border-white/30 p-1 shadow-lg">
            {[
              { id: 'proposals', label: 'Active Proposals', icon: Vote },
              { id: 'treasury', label: 'Treasury', icon: Coins },
              { id: 'governance', label: 'Governance', icon: Users }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'proposals' && (
          <div className="space-y-6">
            {/* Create Proposal Button */}
            <div className="text-center mb-8">
              <button
                onClick={() => !isAuthenticated ? alert('Please connect your wallet to create proposals') : alert('Create proposal feature coming soon!')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                <Plus className="h-4 w-4" />
                <span>Create Proposal</span>
              </button>
            </div>

            {/* Proposals List */}
            <div className="space-y-6">
              {proposals.map((proposal) => (
                <div key={proposal.id} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6 shadow-2xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{proposal.title}</h3>
                          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                            {getStatusIcon(proposal.status)}
                            <span className="capitalize">{proposal.status}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{proposal.description}</p>
                        
                        {/* Voting Progress */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>For: {proposal.votes.for}</span>
                            <span>Against: {proposal.votes.against}</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
                            <div
                              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Proposed by {proposal.proposer}</span>
                          <span>Ends {proposal.endDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Voting Buttons */}
                    {proposal.status === 'active' && (
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleVote(proposal.id, 'for')}
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg"
                        >
                          Vote For
                        </button>
                        <button
                          onClick={() => handleVote(proposal.id, 'against')}
                          className="flex-1 py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg"
                        >
                          Vote Against
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'treasury' && (
          <div className="text-center py-12">
            <div className="relative group max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
                <Coins className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Treasury Balance</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">1,247,892 FOOD</div>
                <p className="text-gray-600">Available for community proposals and platform development</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'governance' && (
          <div className="text-center py-12">
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
                <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Governance Overview</h3>
                <div className="text-left space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Voting Power Required:</span>
                    <span className="font-medium text-gray-800">100 FOOD tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Proposal Threshold:</span>
                    <span className="font-medium text-gray-800">1,000 FOOD tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Voting Period:</span>
                    <span className="font-medium text-gray-800">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quorum Required:</span>
                    <span className="font-medium text-gray-800">10% of total supply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DAOSection
