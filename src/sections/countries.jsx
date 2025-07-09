import React from 'react';

const countries = [
  "Spain", "Italy", "Ukraine", "Romania", "Georgia", "Portugal", "Poland",
  "Morocco", "Kazakhstan", "Croatia", "Kenya", "Côte D'Ivoire", "Serbia",
  "Moldova", "Uganda", "Kyrgyzstan", "Bosnia and Herzegovina", "Bulgaria",
  "Ghana", "Montenegro", "Slovenia", "Nigeria", "Armenia", "Andorra", "Tunisia"
];

export default function CountriesSection() {
  return (
    <section className="bg-[#FFBF42] text-center py-20 text-black w-full overflow-hidden">
      {/* Inline Top Image */}
      <img
        src="https://glovoapp.com/_next/static/media/countries.1afbc7fb.svg"
        alt="Decorative globe"
        className="w-24 md:w-32 mx-auto mb-6"
      />

      <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
        Countries where we deliver
      </h2>

      {/* Chip-style country buttons */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto px-4">
        {countries.map((country, idx) => (
          <button
            key={idx}
            className="bg-white text-black text-lg md:text-xl font-bold px-6 py-3 rounded-3xl shadow hover:bg-gray-100 hover:scale-105 transition duration-200"
          >
            {country}
          </button>
        ))}
      </div>
    </section>
  );
}
