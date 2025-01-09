import React from 'react';

const ArrowUp = () => {
  return (
    <a
      href="#hero"
      className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 hidden lg:block"
    >
      <div className="slow-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6fa8dc', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8e7cc3', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <path
            d="M12 2l-6 6m6-6l6 6"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            style={{ opacity: 0.8 }}
          />
        </svg>
      </div>
    </a>
  );
};

export default ArrowUp;