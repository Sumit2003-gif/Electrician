import React, { useEffect, useState } from "react";
import AboutWho from "../Components/AboutWho";
import WhatWeDo from "../Components/AboutWhatwedo";
import AboutWhyChooseUs from "../Components/AboutWhyChooseUs";
import HomeElectricalServicesSlider from "../Components/HomeElectricalService";
import { Link } from "react-router-dom";

// ScrollReveal component for scroll animations
const ScrollReveal = ({ children, direction = "up", className = "" }) => {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let translateClass = "";
  switch (direction) {
    case "up":
      translateClass = visible ? "translate-y-0" : "translate-y-12";
      break;
    case "down":
      translateClass = visible ? "translate-y-0" : "-translate-y-12";
      break;
    case "left":
      translateClass = visible ? "translate-x-0" : "-translate-x-12";
      break;
    case "right":
      translateClass = visible ? "translate-x-0" : "translate-x-12";
      break;
    default:
      translateClass = visible ? "translate-y-0" : "translate-y-12";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out opacity-${visible ? 100 : 0} ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // slight delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[60vh] md:h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://php.kodesolution.com/2025/electricien-php/images/background/page-title.jpg')",
      }}
    >
      {/* Overlay with fade-in */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          animate ? "opacity-60" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1
          className={`text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About Us
        </h1>
        <p
          className={`text-sm md:text-base text-gray-300 transition-all duration-1000 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link to="/"><span className="hover:underline cursor-pointer hover:text-red-500">Home</span></Link> &gt; About Us
        </p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div>
      <HeroSection />

      <section>
        <ScrollReveal direction="left" className="px-4 md:px-8">
          <AboutWho />
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal direction="right" className="px-4 md:px-8">
          <WhatWeDo />
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal direction="left" className="px-4 md:px-8">
          <AboutWhyChooseUs />
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal direction="right" className="px-4 md:px-8">
          <HomeElectricalServicesSlider />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default About;
