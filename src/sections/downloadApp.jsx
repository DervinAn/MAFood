import React from "react";
import appStore from "../assets/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import googlePlay from "../assets/google-play-store-logo-svgrepo-com.svg";
import downloadAppIcon from "../assets/download_app.svg";
import backgroundPhones from "../assets/download_app_section_background.png";

const DownloadAppSection = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Yellow Top Strip */}
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-items-center mb-6">
            <img src={downloadAppIcon} alt="Download Icon" className="w-26 h-26" />
          </div>
          <h2 className="text-3xl md:text-5xl text-center font-extrabold text-gray-900 mb-4">
            Download the app
          </h2>
          <p className="text-gray-600 text-center md:text-xl lg:text-2xl text-lg mb-6">
            Order anything and track it in real time with the Glovo app.
          </p>
          <div className="flex justify-center items-center lg:justify-center gap-4">
            <a href="#">
              <img src={appStore} alt="App Store" className="h-35" />
            </a>
            <a href="#">
              <img src={googlePlay} alt="Google Play" className="h-14" />
            </a>
          </div>
        </div>

        {/* Right: Phones Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={backgroundPhones}
            alt="Phones Background"
            className="w-full max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
