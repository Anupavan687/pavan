import React from 'react';
import CoinCard from './CoinCard';

interface CoinListProps {
  activeTab: string;
  onCoinClick: () => void;
}

const CoinList: React.FC<CoinListProps> = ({ activeTab, onCoinClick }) => {
  const coins = [
    { 
      id: 1, 
      name: 'Ethereum', 
      symbol: 'ETH', 
      time: '10h',
      contractAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+2.4%'
    },
    { 
      id: 2, 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      time: '10m',
      contractAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+1.2%'
    },
    { 
      id: 3, 
      name: 'Azuro Protocol', 
      symbol: 'AZUR', 
      time: '10h',
      contractAddress: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+5.7%'
    },
    { 
      id: 4, 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      time: '20s',
      contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+0.8%'
    },
    { 
      id: 5, 
      name: 'Azuro Protocol', 
      symbol: 'AZUR', 
      time: '10h',
      contractAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+3.9%'
    },
    { 
      id: 6, 
      name: 'Ethereum', 
      symbol: 'ETH', 
      time: '5m',
      contractAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+1.5%'
    },
    { 
      id: 7, 
      name: 'Azuro Protocol', 
      symbol: 'AZUR', 
      time: '10h',
      contractAddress: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+4.2%'
    },
    { 
      id: 8, 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      time: '10s',
      contractAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      description: 'We fund research and teams who speed up crypto development who teams crypto...',
      priceChange: '+2.1%'
    }
  ];

  return (
    <div className="px-2 pb-4">
      <div className="grid grid-cols-12 px-2 py-2 text-xs text-gray-500 border-b border-purple-900/20">
        <div className="col-span-2">Time</div>
        <div className="col-span-4">Token Info</div>
        <div className="col-span-6">Research</div>
      </div>
      
      <div className="space-y-px">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} onClick={onCoinClick} />
        ))}
      </div>
    </div>
  );
};

export default CoinList;