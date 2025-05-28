import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-start px-4 space-x-4 border-b border-purple-900/20">
      <button 
        onClick={() => setActiveTab('latest')}
        className={`py-2 px-1 relative ${
          activeTab === 'latest' 
            ? 'text-white font-medium' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        Latest Reports
        {activeTab === 'latest' && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></span>
        )}
      </button>
      <button 
        onClick={() => setActiveTab('new')}
        className={`py-2 px-1 relative ${
          activeTab === 'new' 
            ? 'text-white font-medium' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        New Coins
        {activeTab === 'new' && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></span>
        )}
      </button>
    </div>
  );
};

export default TabNavigation;