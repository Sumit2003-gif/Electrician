import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const exploreLinks = [
  { label: "About Company", to: "/about" },
  { label: "Meet the Team", to: "/team" },
  { label: "News & Media", to: "/news" },
  { label: "Our Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const galleryImages = [
  "https://php.kodesolution.com/2025/electricien-php/images/resource/service1-1.jpg",
  "https://php.kodesolution.com/2025/electricien-php/images/resource/news-2.jpg",
  "https://php.kodesolution.com/2025/electricien-php/images/resource/news-1.jpg",
  "https://php.kodesolution.com/2025/electricien-php/images/resource/news-3.jpg",
  "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-5.jpg",
  "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-4.jpg",
];

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-[#16171A] text-gray-300 py-16 px-6 sm:px-12
        max-w-7xl mx-auto transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      aria-label="Website Footer"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div
          className={`transform transition-transform duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/logo.png"
            alt="Electrica Logo"
            className="w-36 mb-6 mx-auto sm:mx-0"
          />
          <h2 className="text-white font-bold text-xl mb-4 tracking-wide">About us</h2>
          <p className="mb-6 leading-relaxed text-gray-400 text-center sm:text-left">
            Desires to obtain pain of itself, because it is pain, but occasionally
            circumstances.
          </p>
          <div className="flex justify-center sm:justify-start space-x-6 text-gray-400">
            {[FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social media ${i + 1}`}
                className="hover:text-red-600 transition-colors duration-300 text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div
          className={`transform transition-transform duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-white font-semibold text-lg mb-6 border-b border-red-600 pb-2 inline-block tracking-wide">
            Explore
          </h3>
          <ul className="space-y-4 text-gray-400">
            {exploreLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-red-600 cursor-pointer transition-colors duration-300 tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div
          className={`transform transition-transform duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-white font-semibold text-lg mb-6 border-b border-red-600 pb-2 inline-block tracking-wide">
            Contact
          </h3>
          <address className="not-italic text-gray-400 mb-5 leading-relaxed tracking-wide">
            66 Road Brooklyn Street, 600 New York, USA
          </address>
          <div className="flex items-center space-x-3 mb-4 text-gray-400 hover:text-red-600 cursor-pointer transition-colors duration-300">
            <FaEnvelope className="text-red-600" />
            <a href="mailto:needhelp@company.com" className="font-semibold text-white tracking-wide">
              needhelp@company.com
            </a>
          </div>
          <div className="flex items-center space-x-3 text-gray-400 hover:text-red-600 cursor-pointer transition-colors duration-300">
            <FaPhoneAlt className="text-red-600" />
            <a href="tel:+001112223333" className="font-semibold text-white tracking-wide">
              +00 111 222 3333
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div
          className={`transform transition-transform duration-700 delay-450 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-white font-semibold text-lg mb-6 border-b border-red-600 pb-2 inline-block tracking-wide">
            Gallery
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((src, idx) => (
              <a
                key={idx}
                href="#"
                className="block rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-20 object-cover rounded"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm
          transform transition-transform duration-700 delay-600
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        © 2025{" "}
        <Link
          to="/"
          className="text-red-600 font-semibold cursor-pointer hover:underline tracking-wide"
        >
          Electrica
        </Link>{" "}
        | All Rights Reserved |{" "}
        <Link to="#" className="text-red-600 cursor-pointer hover:underline tracking-wide">
          ThemeMascot
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
