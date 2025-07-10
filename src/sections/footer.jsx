import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Oval Top Shape */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-[1]">
        <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[80px]"
        >
        <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="black"
        />
        </svg>
        </div>


      <div className="relative z-10">
        {/* Glovo Logo */}
        <div className="mb-10 text-center md:text-left">
          <svg
            width="171"
            height="56"
            viewBox="0 0 171 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto md:mx-0"
          >
            <g>
              <g>
                <path
                  d="M41.641 18.6392C41.641 16.8276 43.0516 15.3779 44.9066 15.3779C46.7606 15.3779 48.2122 16.8276 48.2122 18.6392V52.335C48.2122 54.1867 46.7606 55.5963 44.9066 55.5963C43.0926 55.5963 41.641 54.1876 41.641 52.335V18.6392Z"
                  fill="#009E81"
                />
                <path
                  d="M0 36.4334V36.3125C0 25.6847 8.14298 16.6666 19.6317 16.6666C25.356 16.6666 29.1452 18.0353 32.612 20.5318C33.2567 21.0147 33.9825 21.9405 33.9825 23.2292C33.9825 25.0408 32.5309 26.5305 30.6769 26.5305C29.7899 26.5305 29.1452 26.1685 28.6206 25.7656C26.1619 23.994 23.501 22.7863 19.3894 22.7863C12.3757 22.7863 7.05383 28.946 7.05383 36.1924V36.3134C7.05383 44.1237 12.2135 49.8805 19.9941 49.8805C23.582 49.8805 26.8467 48.7537 29.1852 47.0221V39.8966H21.6469C20.0342 39.8966 18.6636 38.6489 18.6636 36.9982C18.6636 35.3876 20.0342 34.0598 21.6469 34.0598H32.2486C34.1437 34.0598 35.6344 35.5095 35.6344 37.4411V47.586C35.6344 49.4785 34.8685 50.8472 33.2968 51.8131C30.0312 53.9866 25.4762 55.9592 19.7519 55.9592C7.86068 55.9592 0 47.505 0 36.4334Z"
                  fill="#009E81"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M53.3319 41.0234V41.1443C53.3319 49.2757 59.781 55.9592 68.5287 56.0001C77.3974 56.0001 83.9277 49.1966 83.9277 41.0643V40.9434C83.9277 32.7302 77.4776 26.0476 68.6498 26.0476C59.8621 26.0476 53.3319 32.8111 53.3319 41.0234ZM77.3574 41.0234V41.1443C77.3574 46.0953 73.9707 50.2024 68.6107 50.2434C63.491 50.2434 59.863 46.0563 59.863 41.0643V40.9434C59.863 35.9505 63.2488 31.8043 68.5296 31.8043C73.7294 31.8043 77.3574 35.9914 77.3574 41.0234Z"
                  fill="#009E81"
                />
                <path
                  d="M100.375 55.8783H100.052C98.2384 55.8783 97.0692 54.7515 96.3033 52.9799L86.7497 31.0795C86.7403 31.0512 86.7307 31.0226 86.721 30.9938L86.7202 30.9913C86.565 30.5286 86.3873 29.9987 86.3873 29.4689C86.3873 27.8583 87.8389 26.3286 89.6529 26.3286C91.4669 26.3286 92.3539 27.3753 92.9185 28.704L100.296 47.706L107.794 28.5831C108.277 27.4563 109.164 26.2886 110.898 26.2886C112.712 26.2886 114.123 27.6573 114.123 29.4289C114.123 30.0327 113.922 30.6766 113.76 30.9986L104.126 52.9799C103.358 54.6705 102.149 55.8783 100.375 55.8783Z"
                  fill="#009E81"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M116.459 41.0234V41.1443C116.459 49.2757 122.949 55.9592 131.696 56.0001C140.565 56.0001 147.095 49.1966 147.095 41.0643V40.9434C147.095 32.7302 140.645 26.0476 131.818 26.0476C122.989 26.0476 116.459 32.8111 116.459 41.0234ZM140.525 41.0234V41.1443C140.525 46.0953 137.138 50.2024 131.778 50.2434C126.659 50.2434 123.031 46.0563 123.031 41.0643V40.9434C123.031 35.9505 126.417 31.8043 131.697 31.8043C136.897 31.8043 140.525 35.9914 140.525 41.0234Z"
                  fill="#009E81"
                />
              </g>
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M145.16 12.9232C145.16 5.79679 150.966 0 158.1 0C165.235 0 171.04 5.79679 171 12.9232C171 15.6206 170.194 18.2371 168.581 20.4516L168.259 20.9345L161.526 30.4355C161.526 30.4355 160.68 31.7642 158.906 31.7642H157.294C155.48 31.7642 154.674 30.4355 154.674 30.4355L147.941 20.9345L147.579 20.4516C146.007 18.2371 145.16 15.6206 145.16 12.9232ZM163.059 17.1903L163.421 16.7074C164.227 15.5797 164.671 14.2919 164.671 12.8832C164.671 9.25998 161.728 6.32158 158.1 6.32158C154.472 6.32158 151.53 9.25998 151.53 12.8832C151.53 14.2519 151.974 15.5806 152.78 16.7074L153.142 17.2303L158.1 24.1949L163.059 17.1903Z"
                  fill="#FFCD1A"
                />
                <path
                  d="M158.06 34.0187C156.004 34.0187 154.472 35.5884 154.472 37.561C154.472 39.4526 156.004 41.0232 158.02 41.0632C160.117 41.0632 161.648 39.4936 161.648 37.561V37.521C161.648 35.5884 160.117 34.0187 158.06 34.0187Z"
                  fill="#FFCD1A"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left z-[2]">
          <div>
            <h4 className="font-bold md:text-xl text-lg mb-2">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline  text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold md:text-xl text-lg mb-2">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg md:text-xl mb-2">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline  text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  text-white">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="mt-10 text-center md:text-right">
          <button className="bg-white text-black text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
            🌍 Change Language
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
