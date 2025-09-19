import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneVolume } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-black flex flex-col justify-center items-center lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]">
      <div className="w-full h-auto flex lg:flex-row flex-col justify-between items-start gap-[60px]">
        {/* Logo & Info */}
        <div className="lg:w-[40%] w-full flex flex-col justify-start items-start gap-[25px]">
          <div className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
            Redian<span className="text-white">.</span>
          </div>
          <p className="text-gray-300 text-md font-poppins">
            Feel free to call us in working hours Mon-Fri 9:00 to 18:00 team will be happy to help.
          </p>
          <div className="flex justify-start items-center gap-2 text-white">
            <FaPhoneVolume className="text-themegreen size-5" /> +923392020232
          </div>
          <div className="flex justify-center items-center gap-6">
            <FaFacebook className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaTwitter className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaInstagram className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaLinkedin className="size-4 text-white hover:text-themegreen cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:w-[15%] w-full flex flex-col justify-start items-start gap-6">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">Redian</h1>
          <ul>
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-themegreen text-md">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-300 hover:text-themegreen text-md">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="text-gray-300 hover:text-themegreen text-md">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-300 hover:text-themegreen text-md">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="lg:w-[15%] w-full flex flex-col justify-start items-start gap-6">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">Services</h1>
          <ul>
            <li className="text-gray-300 hover:text-themegreen text-md">IT Solutions</li>
            <li className="text-gray-300 hover:text-themegreen text-md">Ecommerce</li>
            <li className="text-gray-300 hover:text-themegreen text-md">Web Development</li>
            <li className="text-gray-300 hover:text-themegreen text-md">App Development</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-auto border-t-2 border-gray-700 flex lg:flex-row flex-col justify-between items-center pt-6 gap-[10px]">
        <p className="text-gray-300 text-md font-poppins text-center">
          Copyright @ 2025 Redian. All rights reserved
        </p>
        <ul className="text-gray-300 flex justify-center items-center gap-6">
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
    </div>
  );
};
