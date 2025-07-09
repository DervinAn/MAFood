import React from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#FFBF42]">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <span className="text-5xl font-bold text-[#00a082]">Glovo</span>
        {/* SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00a082"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" fill="#00a082" />
        </svg>
      </div>

      {/* Login button */}
      <button className="bg-[#00a082] flex items-center gap-2 text-white px-5 py-2 rounded-full font-medium hover:opacity-90">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6" // Adjust size as needed
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
          
        </svg>
        Login
      </button>
    </header>
  );
}
