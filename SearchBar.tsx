import React, { useState, useRef, useEffect } from 'react';
import { Search, ArrowRight, Flame } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const topSearchedCoins = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', searches: '2.5M' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', searches: '1.8M' },
    { id: 3, name: 'Solana', symbol: 'SOL', searches: '950K' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="fixed bottom-0 left-0 right-0 bg-[#13111E] border-t border-purple-900/20 backdrop-blur-md">
      <div className="px-4 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Contract Address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            className="w-full bg-[#1E1A2E] text-gray-200 rounded-full py-2 pl-10 pr-16 text-sm border border-purple-900/20 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-500"
          />
          <div className="absolute left-0 top-0 h-full flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:from-purple-600 hover:to-indigo-600 transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isSearchFocused && (
        <div className="px-4 py-3 space-y-4 animate-fadeIn">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center">
              <Flame className="w-4 h-4 text-orange-500 mr-1" /> Top Searched
            </h3>
            <div className="space-y-2">
              {topSearchedCoins.map((coin) => (
                <div 
                  key={coin.id}
                  onClick={() => {
                    setSearchTerm(coin.name);
                    setIsSearchFocused(false);
                  }}
                  className="flex items-center justify-between bg-[#1E1A2E] p-2 rounded-lg border border-purple-900/20 cursor-pointer hover:bg-purple-900/20 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{coin.name}</span>
                    <span className="text-xs text-gray-500">{coin.symbol}</span>
                  </div>
                  <span className="text-xs text-purple-400">{coin.searches} searches</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;