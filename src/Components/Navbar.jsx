import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const menu = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

const socialIcons = [
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const renderMenuLinks = (isScrolled) =>
    menu.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        onClick={closeMenu}
        data-aos="fade-down"
        data-aos-delay={index * 100}
        className={`relative group font-semibold transition-all duration-300 text-lg ${
          location.pathname === item.path
            ? isScrolled
              ? "text-red-600"
              : "text-white border-b-2 border-white pb-1"
            : isScrolled
            ? "text-gray-700 hover:text-red-600"
            : "text-white hover:text-red-500"
        }`}
      >
        <span className="block transform transition-transform duration-300 group-hover:translate-y-[-3px] group-hover:scale-105">
          {item.name}
        </span>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
      </Link>
    ));

  const renderSocialIcons = (isScrolled) =>
    socialIcons.map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
        data-aos-delay={index * 150}
        className={`text-xl transition-colors duration-300 ${
          isScrolled
            ? "text-gray-700 hover:text-red-600"
            : "text-white hover:text-red-500"
        }`}
        aria-label={`Link to ${item.link}`}
      >
        {item.icon}
      </a>
    ));

  return (
    <>
      {/* Top Black Navbar */}
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-90 py-5 px-6 rounded-xl w-[90%] max-w-7xl
        shadow-xl transition-all duration-500 ease-in-out ${
          scrolled
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/logo.png"
            alt="Logo"
            className="h-10"
            data-aos="fade-right"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {renderMenuLinks(false)}
          </div>

          {/* Booking & Socials */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:012345678">
              <button
                className="bg-red-600 cursor-pointer hover:bg-red-700 active:bg-red-800 text-white font-bold px-6 py-2 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105"
                data-aos="zoom-in"
              >
                BOOKING NOW
              </button>
            </a>
            <div className="flex gap-5">{renderSocialIcons(false)}</div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 space-y-4 transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4 text-white">
            {renderMenuLinks(false)}
            <div className="flex gap-5 mt-2">{renderSocialIcons(false)}</div>
            <a href="tel:012345678">
              <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition duration-300 ease-in-out">
                BOOKING NOW
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Sticky White Navbar (Appears after scroll) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 w-full transition-all duration-500 ease-in-out transform ${
          scrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/logo-2.png"
            alt="Logo"
            className="h-8"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-gray-700">
            {renderMenuLinks(true)}
          </div>

          {/* Booking & Social Icons */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:012345678">
              <button className="bg-red-600 cursor-pointer hover:bg-red-700 active:bg-red-800 text-white font-bold px-5 py-2 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 text-sm">
                BOOKING NOW
              </button>
            </a>
            <div className="flex gap-5">{renderSocialIcons(true)}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
