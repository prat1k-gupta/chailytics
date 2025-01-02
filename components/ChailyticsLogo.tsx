import React from 'react';

export const ChailyticsLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <circle cx="20" cy="20" r="20" fill="#D7CCC8" />
        <path
          d="M10 15C10 12.2386 12.2386 10 15 10H25C27.7614 10 30 12.2386 30 15V20C30 24.4183 26.4183 28 22 28H18C13.5817 28 10 24.4183 10 20V15Z"
          fill="#795548"
        />
        <path
          d="M13 18C13 16.3431 14.3431 15 16 15H24C25.6569 15 27 16.3431 27 18V20C27 22.7614 24.7614 25 22 25H18C15.2386 25 13 22.7614 13 20V18Z"
          fill="#EFEBE9"
        />
        <path
          d="M30 22C30 24.2091 28.2091 26 26 26C23.7909 26 22 24.2091 22 22C22 19.7909 23.7909 18 26 18C28.2091 18 30 19.7909 30 22Z"
          fill="#8D6E63"
        />
      </svg>
      <span className="text-2xl font-bold text-[#5D4037]">Chailytics<sup className="text-xs">TM</sup></span>
    </div>
  );
};

