import React, { useEffect } from 'react';
import aboutimg from '../assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hanzala from '../assets/hanzala.jpeg';
import mirza from '../assets/mirza.jpeg';
import tayyab from '../assets/tayyab.jpeg';
import sadaat from '../assets/sadaat.jpeg';
import team1212 from '../assets/team1212.jpeg';


// Leaders data
const leaders = [
  {
    id: 1,
    name: "Muhammad Bin Kashif",
    role: "CEO & Founder",
    image: mirza,
  },
  {
    id: 2,
    name: "Hanzala Rasheed",
    role: "CEO & Founder",
    image: hanzala,
  },
  {
    id: 3,
    name: "Tayyab Ahmer",
    role: "Managing Director",
    image: tayyab,
  },
  {
    id: 4,
    name: "Sadaat Khan",
    role: "Project Manager",
    image: sadaat,
  },
];

const teamGroupImage = team1212;

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, delay: 200, once: false });
    AOS.refresh();
  }, []);

  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col lg:px-[80px] px-[20px] py-[60px] pt-[90px] gap-[60px] font-poppins"
    >
      {/* Top Section */}
      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-[40px]">
        <div className="lg:w-[70%] w-full flex flex-col items-start gap-[20px]">
          <h3 data-aos="fade-up" className="text-green-500 uppercase text-sm tracking-widest">
            Who We Are
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-black lg:text-[42px] text-[28px] leading-[1.2em]"
          >
            Delivering Excellence IT Solutions
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 text-md lg:w-[80%]">
            We deliver innovative IT solutions that drive efficiency, growth, and lasting success.
          </p>
        </div>

        <div className="lg:w-[30%] w-full flex lg:justify-end justify-start" data-aos="fade-left">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-[80px]">
        <div className="lg:w-[40%] w-full" data-aos="fade-right">
          <img src={aboutimg} alt="About Us" className="w-full h-auto rounded-lg shadow-md object-cover" />
        </div>

        <div className="lg:w-[60%] w-full flex flex-col items-start gap-[40px]">
          <div data-aos="fade-up">
            <h2 className="text-black text-[28px] lg:text-[35px] font-medium">Digital Marketing</h2>
            <p className="text-gray-500 text-md">
              SEO, social media, and paid campaigns to boost brand visibility and engagement.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-black text-[28px] lg:text-[35px] font-medium">Creative Design & Branding</h2>
            <p className="text-gray-500 text-md">
              Crafting unique brand identities, visuals, and content that connect with audiences.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-black text-[28px] lg:text-[35px] font-medium">Web Development & IT Solutions</h2>
            <p className="text-gray-500 text-md">
              Building responsive websites, e-commerce platforms, and innovative digital solutions.
            </p>
          </div>
        </div>
      </div>

      

      {/* Team Section */}
      <div className="w-full flex flex-col items-center gap-8 bg-gradient-to-b from-white via-gray-50 to-white py-20 rounded-2xl">
        <h2
          data-aos="fade-up"
          className="text-4xl font-normal font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 uppercase"
        >
          Meet Our Leadership
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-700 text-center max-w-2xl font-poppins"
        >
          Our visionary leaders driving the company forward.
        </p>

        {/* Leader Cards */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 w-full max-w-6xl px-4">
          {leaders.map(({ id, name, role, image }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={id * 150}
              className="group relative bg-gradient-to-tr from-blue-400 to-green-400 rounded-3xl shadow-lg p-6 flex flex-col items-center w-72 hover:shadow-2xl hover:-translate-y-3 transition-transform duration-300 cursor-pointer"
            >
              {/* Image with White Ring */}
              <div className="relative w-32 h-32 mb-5 rounded-full p-1 bg-white">
                <img
                  src={image}
                  alt={name}
                  className="rounded-full object-cover object-[50%_40%] w-full h-full border-4 border-white group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Name with gradient text */}
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-700 to-green-600 text-transparent bg-clip-text text-center">
                {name}
              </h3>

              {/* Role with lighter gradient text */}
              <p className="text-center text-blue-100 mt-1 mb-4 font-medium">{role}</p>

              {/* Social Icons */}
              <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Group Image */}
        <div
          data-aos="fade-up"
          data-aos-delay={500}
          className="w-full max-w-6xl mt-12 relative rounded-3xl overflow-hidden cursor-pointer group"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400 to-green-400 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-70"></div>

          <img
            src={teamGroupImage}
            alt="Our Team"
            className="relative w-full rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Optional subtle overlay to darken image slightly for better contrast */}
          <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
