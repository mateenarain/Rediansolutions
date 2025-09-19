import React, { useEffect } from 'react';
import aboutimg from '../assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col items-center justify-between lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px]"
    >
      {/* Top Section */}
      <div
        id="top-box"
        className="w-full flex lg:flex-row flex-col items-center justify-between gap-[40px]"
      >
        {/* Left Content */}
        <div className="lg:w-[60%] w-full flex flex-col items-start gap-[20px]">
          <h1 className="text-themegreen uppercase text-sm font-poppins">
            Who We Are
          </h1>
          <h1 className="text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins font-bold">
            Delivering Excellence IT Solutions
          </h1>
          <p className="text-gray-500 text-md font-poppins lg:w-[80%]">
            We deliver innovative IT solutions that drive efficiency, growth,
            and lasting success.
          </p>
        </div>

        {/* Right Button */}
        <div className="lg:w-[40%] w-full flex lg:justify-end justify-start items-center">
          <button className="bg-themegreen hover:bg-black hover:text-white py-4 px-6 text-black text-md font-semibold rounded-md">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        id="bottom-box"
        className="w-full flex lg:flex-row flex-col justify-center items-center gap-[80px]"
      >
        {/* Image Box */}
        <div id="img-box" className="lg:w-[40%] w-full">
          <img
            src={aboutimg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Content Box */}
        <div
          id="content-box"
          className="lg:w-[60%] w-full flex flex-col items-start gap-[40px]"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-[28px] lg:text-[35px] capitalize font-semibold font-poppins">
              Digital Marketing
            </h1>
            <p className="text-gray-500 text-md font-poppins">
              SEO, social media, and paid campaigns to boost brand visibility
              and engagement.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-black text-[28px] lg:text-[35px] capitalize font-semibold font-poppins">
              Creative Design & Branding
            </h1>
            <p className="text-gray-500 text-md font-poppins">
              Crafting unique brand identities, visuals, and content that
              connect with audiences.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-black text-[28px] lg:text-[35px] capitalize font-semibold font-poppins">
              Web Development & IT Solutions
            </h1>
            <p className="text-gray-500 text-md font-poppins">
              Building responsive websites, e-commerce platforms, and innovative
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
