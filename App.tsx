import React, { useState } from 'react';
import { Lightbulb, Search, ArrowUpRight, Menu, X, Info } from 'lucide-react';
import Header from './components/Header';
import TrendingCoins from './components/TrendingCoins';
import TabNavigation from './components/TabNavigation';
import CoinList from './components/CoinList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import CoinDetails from './components/CoinDetails';

function App() {
  const [activeTab, setActiveTab] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13111E] to-[#0C0A17] text-gray-100 flex flex-col">
      {!showDetails ? (
        <>
          <Header />
          <main className="flex-grow">
            <TrendingCoins />
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <CoinList activeTab={activeTab} onCoinClick={() => setShowDetails(true)} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={10} />
            <SearchBar />
          </main>
        </>
      ) : (
        <CoinDetails onBack={() => setShowDetails(false)} />
      )}
    </div>
  );
}

export default App;