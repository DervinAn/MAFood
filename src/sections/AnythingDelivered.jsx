import React from 'react';

const items = [
  {
    title: "Your city's top restaurants",
    description:
      "With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!",
    image: 'https://glovoapp.com/_next/static/media/restaurants.e082f46b.svg',
  },
  {
    title: "Fast delivery",
    description:
      "Like a flash! Order or send anything in your city and receive it in minutes",
    image: 'https://glovoapp.com/_next/static/media/delivery.81e9087f.svg',
  },
  {
    title: "Find anything you need!",
    description:
      "From supermarkets to shops, pharmacies to florists — if it's in your city order it and receive it.",
    image: 'https://glovoapp.com/_next/static/media/groceries.3dd22a11.svg',
  },
];

export default function AnythingDelivered() {
  return (
    <section className="bg-white py-16 text-center px-4">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-20 text-black">
        Anything delivered
      </h2>

      <div className="grid gap-14 md:grid-cols-3 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 md:w-36 md:h-36 mb-6"
            />
            <h3 className="text-3xl md:text-3xl font-extrabold mb-4 text-[#222]">
              {item.title}
            </h3>
            <p className="text-base md:text-lg lg:text-xl font-medium text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
