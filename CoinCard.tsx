import React from 'react';
import { ArrowUpRight, Copy } from 'lucide-react';

interface Coin {
  id: number;
  name: string;
  symbol: string;
  time: string;
  description: string;
  priceChange: string;
  contractAddress?: string;
}

interface CoinCardProps {
  coin: Coin;
  onClick: () => void;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin, onClick }) => {
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div 
      className="grid grid-cols-12 py-3 px-2 border-b border-purple-900/10 hover:bg-purple-900/5 transition-colors cursor-pointer group"
      onClick={onClick}
    >
      {/* Time */}
      <div className="col-span-2 text-xs font-medium text-gray-400 flex items-center">
        <div className="rounded bg-purple-900/20 px-1.5 py-0.5">{coin.time}</div>
      </div>
      
      {/* Coin info */}
      <div className="col-span-4 flex items-center space-x-2">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-900/30 text-xs">
          🪙
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{coin.symbol}</span>
          <div className="flex items-center space-x-2 group">
            <span className="text-xs text-gray-500">
              CA: {shortenAddress(coin.contractAddress || '0x12340abcdef')}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard(coin.contractAddress || '');
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Copy className="w-3 h-3 text-gray-400 hover:text-purple-400" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="col-span-6 text-xs text-gray-300 leading-tight flex items-center">
        <p className="line-clamp-2">{coin.description}</p>
      </div>
    </div>
  );
};

export default CoinCard;