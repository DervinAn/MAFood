import React, { useState } from 'react';
import heroImage from '../assets/hero-imag-glovo.png'; // ✅ Adjust path if needed

export default function Hero() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStartAnimation = () => {
    setShowAnimation(true);
    setShowStartButton(false);
  };

  return (
    <section className="bg-[#FFBF42] px-6 sm:px-10 md:px-16 py-10 flex flex-col md:flex-row items-center justify-center gap-10 relative overflow-hidden pb-20">
      {/* Left Visual */}
      <div className="w-full md:w-1/3 mx-auto flex justify-center relative">
        {showAnimation ? (
          <video
            src="https://glovoapp.com/animations/address-container-animation.webm"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg aspect-square rounded-3xl object-cover shadow-lg"
          />
        ) : (
          <>
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg aspect-square rounded-3xl object-cover shadow-lg"
            />
            {showStartButton && (
              <button
                onClick={handleStartAnimation}
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white/70 flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-red-600"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </>
        )}
      </div>

      {/* Right Input Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold text-black leading-tight">
          Food delivery and more
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-extrabold">
          Groceries, shops, pharmacies, anything!
        </p>

        {/* Responsive Input and Button */}
        <div className="flex flex-col md:flex-row items-stretch gap-2 bg-white p-3 sm:p-4 rounded-2xl w-full max-w-xl mx-auto md:mx-0">
          <div className="flex items-center flex-grow bg-white rounded-full px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 12.414A4 4 0 1012 13.414l4.243 4.243z"
              />
            </svg>
            <input
              type="text"
              placeholder="What is your address?"
              className="flex-grow outline-none text-black text-base sm:text-lg"
            />
          </div>
          <button
            className="text-[#00a082] text-sm sm:text-base font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap w-full md:w-auto"
          >
            Use your current location
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block scale-y-[-1]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.46,119.24c54.21,32.42,104.56,65,170.1,65,116.68,0,147.69-65.71,166.56-89.34V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
