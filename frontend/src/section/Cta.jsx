import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // <-- Import Link
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from '../assets/hero_bg.jpg';

export const Cta = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="contact"
      className="w-full h-auto flex justify-center items-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* CONTENT WRAPPER */}
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h1
          data-aos="zoom-in"
          data-aos-delay="50"
          className="text-themegreen uppercase text-sm font-poppins tracking-wider"
        >
          Ready to Get Started
        </h1>

        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-white lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:w-[60%] w-full"
        >
          Let's Elevate Your Business With Us
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="150"
          className="text-gray-300 text-md font-poppins lg:w-[60%] w-full"
        >
          Partner with us to unlock growth, innovation, and lasting success.
        </p>

        {/* BUTTONS */}
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-3 mt-6"
        >
          <Link
            to="/contact"  // <-- Link to contact page
            className="bg-themegreen hover:bg-white hover:text-black py-4 px-8 text-black text-md font-semibold rounded-md transition-all inline-block"
          >
            CONTACT US
          </Link>
          <button className="bg-white hover:bg-themegreen hover:text-black py-4 px-8 text-black text-md font-semibold rounded-md transition-all">
            REACH US
          </button>
        </div>
      </div>
    </div>
  );
};
