import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import green from "../assets/green.png"; // ✅ Import your logo

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <header className="w-full bg-black fixed top-0 left-0 lg:px-20 px-6 h-[70px] flex items-center z-50">
      <div className="w-full flex justify-between items-center">
        {/* ✅ Logo */}
        <div className="flex items-center space-x-2 cursor-pointer select-none">
          <img src={green} alt="Redian Logo" className="h-10 w-auto" />
          <span className="text-themegreen font-bold text-3xl font-poppins">Redian</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 text-lg font-poppins text-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `cursor-pointer hover:text-themegreen transition-colors ${
                      isActive ? "text-themegreen" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex items-center justify-center`}
      >
        <IoCloseSharp
          className="fixed top-6 right-6 text-4xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="flex flex-col space-y-8 text-3xl font-poppins text-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-themegreen ${
                    isActive ? "text-themegreen" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
