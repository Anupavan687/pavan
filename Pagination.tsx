import React from 'react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, totalPages }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    if (currentPage <= 3) {
      pages.push(2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-4 px-4 mb-16">
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          disabled={typeof page !== 'number'}
          className={`w-6 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all
            ${typeof page === 'number' && page === currentPage 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 scale-110' 
              : typeof page === 'number'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                : 'bg-transparent text-gray-500'
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;