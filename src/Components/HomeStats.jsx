import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBatteryFull,
  FaShieldAlt,
  FaLightbulb,
  FaHandPaper,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBatteryFull />,
    number: 25,
    suffix: "+",
    label: "Years Of Experience",
  },
  {
    icon: <FaShieldAlt />,
    number: 10000,
    suffix: "",
    label: "Satisfied Clients",
  },
  {
    icon: <FaLightbulb />,
    number: 1000,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <FaHandPaper />,
    number: 2000,
    suffix: "+",
    label: "Awards Won",
  },
];

// Custom hook to check if element is visible in viewport
const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
};

const StatCard = ({ icon, number, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px"); // trigger a bit early

  useEffect(() => {
    if (!onScreen) return;

    let start = 0;
    const end = number;
    if (start === end) return;

    const totalDuration = 2000; // 2 seconds
    const incrementTime = 20; // ms
    const steps = totalDuration / incrementTime;
    const stepIncrement = Math.ceil(end / steps);

    let timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [onScreen, number]);

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-once="true"
      className="flex flex-col items-center border-4 border-gray-600 bg-white/80 backdrop-blur-md rounded-xl p-8 w-44 sm:w-52 md:w-60 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer relative"
      onMouseEnter={() => setIsRotating(true)}
      onMouseLeave={() => setIsRotating(false)}
    >
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mb-6 absolute -top-18 flex items-center justify-center rounded-full text-white text-4xl sm:text-5xl transition-transform duration-700 ease-in-out"
        style={{
          perspective: "600px",
          backgroundColor: isRotating ? "#24201F" : "#dc2626",
          transform: isRotating ? "rotate(360deg)" : "rotate(0deg)",
        }}
      >
        {icon}
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 select-none">
        {count.toLocaleString()}
        {suffix}
      </h2>
      <p className="text-gray-700 mt-2 font-medium text-center">{label}</p>
    </div>
  );
};

const HomeStatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="relative border-2 h-auto sm:h-[90vh] flex flex-col justify-center items-center max-w-7xl mx-auto px-6 py-24 gap-12"
      style={{
        backgroundImage:
          "url('https://php.kodesolution.com/2025/electricien-php/images/resource/about2-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Heading and Subtitle */}
      <div
        data-aos="fade-down"
        data-aos-once="true"
        className="relative text-center max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
          Our Achievements Speak for Themselves
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 drop-shadow-md max-w-xl mx-auto">
          We pride ourselves on delivering quality and excellence. Here are some
          highlights from our journey.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8 max-w-7xl mx-auto">
        {stats.map(({ icon, number, suffix, label }, idx) => (
          <StatCard
            key={idx}
            icon={icon}
            number={number}
            suffix={suffix}
            label={label}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeStatsSection;
