import React from "react";
import riderImage from "../assets/let_do_ittogther_1.png";
import partnerImage from "../assets/let_do_ittogther_2.png";
import careersImage from "../assets/let_do_ittogther_3.png";
import handIcon from "../assets/let_do_ittogther_hand_icon.svg";
import topWave from "../assets/let_do_ittogther_top.svg";

const LetDoItTogetherSection = () => {
  const options = [
    {
      title: "Become a rider",
      image: riderImage,
      description:
        "Enjoy flexibility, freedom and competitive earnings by delivering through Glovo.",
    },
    {
      title: "Become a partner",
      image: partnerImage,
      description:
        "Grow with Glovo! Our technology and user base can help you boost sales and unlock new opportunities!",
    },
    {
      title: "Careers",
      image: careersImage,
      description:
        "Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!",
    },
  ];

  return (
    <>
      <div className="relative">
    <img
      src={topWave}
      alt="Section Top Background"
      className="w-full"
    />
  </div>
    <section className="relative bg-gradient-to-b from-[#e9f7f4] to-white py-16 px-4 md:px-12 lg:px-24 text-center">


      <div className="relative z-10">
        {/* Hand Icon */}
        <img src={handIcon} alt="Hand Icon" className="mx-auto mb-4 w-35 h-38" />

        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-extrabold mb-12 text-black">
          Let’s do it together
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {options.map(({ title, image, description }, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="rounded-full overflow-hidden border-[6px] border-[#089c8f] w-55 h-55">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-black mb-2">{title}</h3>
              <p className="text-gray-700 mb-4  md:text-lg px-4">{description}</p>
              <button className="bg-[#089c8f] text-lg text-white px-6 py-2 rounded-full font-medium hover:bg-[#077e75] transition">
                Register here
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default LetDoItTogetherSection;
