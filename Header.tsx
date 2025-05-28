import React from 'react';
import { Lightbulb, Twitter, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1E1A2E] bg-opacity-90 backdrop-blur-md sticky top-0 z-50 border-b border-purple-900/30">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Lightbulb className="w-6 h-6 text-teal-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Y Trending
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://twitter.com/ytrending" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
          >
            <Twitter className="w-4 h-4 text-purple-300" />
          </a>
          <a 
            href="https://t.me/ytrending" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-purple-900/20 hover:bg-purple-900/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-purple-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;