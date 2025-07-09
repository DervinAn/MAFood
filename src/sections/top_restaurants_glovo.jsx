import React from 'react';

const brands = [
  { name: "McDonald's", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/bghikwl7kiy5zyytrhp3' },
  { name: "KFC", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/bjqayhyh0x0trsnujkfn' },
  { name: "BurgerKing", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/htnphwqorq4rl3zhcr1z' },
  { name: "Carrefour", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/hvpjrukzrzcx2fr7aivr' },
  { name: "PizzaHut", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/ytwytqxp9iracoscs2jf' },
  { name: "Papa John's", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/igq1ghjtalh1hzzu3wx1.png' },
  { name: "Subway", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu' },
  { name: "TacoBell", image: 'https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/grdqndkujhpgjt88ionz' },
];

export default function TopBrands() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">
        Top restaurants and more in Glovo
      </h2>

      <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg"
            />
            <span className="mt-3 px-4 py-1 rounded-md bg-[#f5e3c0] text-[#5c3d00] font-semibold text-base md:text-lg">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
