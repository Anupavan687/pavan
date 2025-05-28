import React, { useState } from 'react';
import { Twitter, Globe, MessageCircle, Copy, ArrowLeft } from 'lucide-react';
import Header from './Header';
import TrendingCoins from './TrendingCoins';
import SearchBar from './SearchBar';

interface CoinDetailsProps {
  onBack: () => void;
}

const CoinDetails: React.FC<CoinDetailsProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('latest');
  
  const coinData = {
    name: 'Bitcoin',
    symbol: 'BTC',
    contractAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    price: '$43,567.89',
    change24h: '+5.2%',
    marketCap: '$834.2B',
    volume24h: '$28.4B',
    socialLinks: {
      website: 'https://bitcoin.org',
      twitter: 'https://twitter.com/bitcoin',
      telegram: 'https://t.me/bitcoin',
      discord: 'https://discord.gg/bitcoin'
    },
    smartFollowers: [
      { name: 'Vitalik.eth', twitter: '@vitalikbuterin' },
      { name: 'CZ', twitter: '@cz_binance' },
      { name: 'SBF', twitter: '@sbf_ftx' },
      { name: 'Justin Sun', twitter: '@justinsuntron' }
    ],
    researchReports: {
      latest: [
        {
          date: '23-02-2025',
          updatedBy: 'Kumar',
          content: `Raydium offers several features that let you trade, earn, and interact with the Solana DeFi ecosystem. Here's what you can do: Swap Tokens: You can swap one cryptocurrency for another instantly.`
        }
      ],
      past: [
        {
          date: '22-02-2025',
          updatedBy: 'Alex',
          content: `Previous analysis of Raydium's performance and market position. Historical data shows consistent growth in liquidity and trading volume.`
        }
      ]
    },
    similarCoins: ['Ethereum', 'Bitcoin', 'Solana', 'Coinweb'],
    latestReports: ['Ethereum', 'Bitcoin', 'Solana', 'Coinweb']
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-[#13111E] text-gray-100">
      <div onClick={onBack} className="cursor-pointer">
        <Header />
      </div>
      
      {/* Top Navigation Bar */}
      <div className="bg-[#1E1A2E]/90 backdrop-blur-md p-4 flex items-center">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-purple-900/20 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <TrendingCoins />

      {/* Main Content */}
      <div className="p-4 space-y-6 pb-24">
        {/* Coin Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">{coinData.symbol}</h1>
            <div className="bg-purple-900/30 px-2 py-1 rounded text-xs">
              Contract: {coinData.contractAddress.slice(0, 6)}...{coinData.contractAddress.slice(-4)}
              <button 
                onClick={() => copyToClipboard(coinData.contractAddress)}
                className="ml-2 hover:text-purple-400"
              >
                <Copy className="w-3 h-3 inline" />
              </button>
            </div>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium">
            Buy Now
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Social Links:</span>
          <div className="flex space-x-2">
            {Object.entries(coinData.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
              >
                {platform === 'website' && <Globe className="w-4 h-4 text-purple-300" />}
                {platform === 'twitter' && <Twitter className="w-4 h-4 text-purple-300" />}
                {platform === 'telegram' && <MessageCircle className="w-4 h-4 text-purple-300" />}
                {platform === 'discord' && <MessageCircle className="w-4 h-4 text-purple-300" />}
              </a>
            ))}
          </div>
        </div>

        {/* Smart Followers */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Smart Followers</h2>
          <div className="flex flex-wrap gap-2">
            {coinData.smartFollowers.map((follower, index) => (
              <div key={index} className="bg-purple-900/20 rounded-lg px-3 py-1.5 text-sm flex items-center space-x-2">
                <Twitter className="w-4 h-4 text-purple-300" />
                <span>{follower.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Report with Tabs */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Research Report</h2>
          
          {/* Tabs */}
          <div className="flex space-x-4 border-b border-purple-900/20">
            <button
              onClick={() => setActiveTab('latest')}
              className={`py-2 px-4 relative ${
                activeTab === 'latest'
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Latest
              {activeTab === 'latest' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-teal-500"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-2 px-4 relative ${
                activeTab === 'past'
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Past
              {activeTab === 'past' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-teal-500"></span>
              )}
            </button>
          </div>

          {/* Report Content */}
          <div className="bg-purple-900/10 rounded-lg p-4">
            {activeTab === 'latest' && coinData.researchReports.latest.map((report, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>{report.date}</span>
                  <span>Updated by: {report.updatedBy}</span>
                </div>
                <p className="text-sm leading-relaxed">{report.content}</p>
              </div>
            ))}
            {activeTab === 'past' && coinData.researchReports.past.map((report, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>{report.date}</span>
                  <span>Updated by: {report.updatedBy}</span>
                </div>
                <p className="text-sm leading-relaxed">{report.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Coins */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Similar Coins</h2>
          <div className="flex flex-wrap gap-2">
            {coinData.similarCoins.map((coin, index) => (
              <div key={index} className="bg-purple-900/20 rounded-lg px-3 py-1.5 text-sm">
                {coin}
              </div>
            ))}
          </div>
        </div>

        {/* Latest Reports */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Latest Reports</h2>
          <div className="flex flex-wrap gap-2">
            {coinData.latestReports.map((coin, index) => (
              <div key={index} className="bg-purple-900/20 rounded-lg px-3 py-1.5 text-sm">
                {coin}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SearchBar />
    </div>
  );
};

export default CoinDetails;