import React from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';

const TrendingCoins: React.FC = () => {
  const trendingCoins = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', change: '+5.2%' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', change: '+3.7%' },
    { id: 3, name: 'Solana', symbol: 'SOL', change: '+1.9%' },
    { id: 4, name: 'Cardano', symbol: 'ADA', change: '+2.8%' },
    { id: 5, name: 'Polkadot', symbol: 'DOT', change: '+4.1%' },
    { id: 6, name: 'Avalanche', symbol: 'AVAX', change: '+3.3%' },
    { id: 7, name: 'Chainlink', symbol: 'LINK', change: '+2.5%' },
    { id: 8, name: 'Polygon', symbol: 'MATIC', change: '+1.8%' },
    { id: 9, name: 'Uniswap', symbol: 'UNI', change: '+2.9%' },
    { id: 10, name: 'Aave', symbol: 'AAVE', change: '+3.5%' }
  ];

  return (
    <div className="overflow-x-auto scrollbar-hide py-3 px-2">
      <div className="flex space-x-3 min-w-max px-2">
        {trendingCoins.map((coin) => (
          <div 
            key={coin.id}
            className="relative flex items-center space-x-2 bg-gradient-to-r from-purple-900/30 to-indigo-900/20 p-2 pr-4 rounded-lg backdrop-blur-sm border border-purple-700/20 min-w-36"
          >
            <div className={`font-bold text-sm rounded-full w-5 h-5 flex items-center justify-center ${
              coin.id === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900' :
              coin.id === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900' :
              coin.id === 3 ? 'bg-gradient-to-r from-amber-700 to-yellow-600 text-gray-900' :
              'bg-gray-700 text-gray-300'
            }`}>
              {coin.id}
            </div>
            <Flame className={`w-4 h-4 ${
              coin.id === 1 ? 'text-orange-500' :
              coin.id === 2 ? 'text-orange-400' :
              coin.id === 3 ? 'text-orange-300' :
              'text-orange-200'
            }`} />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{coin.name}</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-400">{coin.symbol}</span>
                <span className="text-xs text-green-400 font-medium flex items-center">
                  {coin.change}
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
            
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;