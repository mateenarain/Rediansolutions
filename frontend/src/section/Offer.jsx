import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { services } from '../export';

export const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="w-full h-auto flex flex-col justify-center items-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]"
    >
      {/* Heading */}
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-themegreen uppercase text-sm font-poppins"
      >
        OUR SERVICES
      </h1>

      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:w-[50%] w-full text-center"
      >
        Driving Digital Transformation with Excellence
      </h1>

      <p
        data-aos="zoom-in"
        data-aos-delay="150"
        className="text-gray-500 text-md font-poppins lg:w-[60%] w-full text-center"
      >
        “We empower businesses to embrace innovation, streamline processes, and achieve growth by driving digital transformation with excellence.”
      </p>

      {/* Service Cards */}
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 items-start justify-center gap-6 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-4 p-10 border-2 border-gray-200 bg-white hover:bg-green-100 rounded-md cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Icon */}
            <service.icon className="size-[35px] mb-5 text-themegreen" />

            {/* Title */}
            <h1 className="text-black text-[22px] font-poppins font-semibold leading-[1.2em]">
              {service.title}
            </h1>

            {/* Bullet List */}
            <ul className="text-gray-600 text-sm font-poppins list-disc pl-5 space-y-2">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Button */}
            <button className="text-themegreen hover:text-black text-sm font-semibold uppercase mt-6">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
