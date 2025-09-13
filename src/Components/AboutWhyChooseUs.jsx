import React, { useEffect, useRef, useState } from "react";

const benefits = [
  "Our main goal is simply to work for our customers.",
  "Strategies to ensure proactive services.",
  "Professional worldwide methodologies.",
];

const AboutWhyChooseUs = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const leftObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLeftVisible(true);
        leftObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const rightObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRightVisible(true);
        rightObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div
        ref={leftRef}
        className={`relative z-10 transition-transform duration-700 ease-out ${
          leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        {/* Icon + Subtitle */}
        <div className="flex items-center gap-2 mb-4 text-red-600 font-semibold uppercase tracking-widest">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a4 4 0 118 0v6m-4-10v4m0 0v2m0-2h4m-4 0H5" />
          </svg>
          <span>Our Benefits</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
          Why You Should <br /> <span className="text-red-600">Choose Us</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-md mb-8 text-lg leading-relaxed">
          With over four decades of experience delivering innovative solutions to enterprises worldwide, we offer end-to-end services tailored to your business.
        </p>

        {/* List of Benefits */}
        <ul className="space-y-5 max-w-md">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-900 font-medium text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content (Image + Overlay) */}
      <div
        ref={rightRef}
        className={`relative flex justify-center items-center transition-transform duration-700 ease-out ${
          rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
      >
        {/* Image */}
        <img
          src="https://php.kodesolution.com/2025/electricien-php/images/background/10.jpg"
          alt="Electrician working"
          className="rounded-xl shadow-xl max-w-full object-cover"
        />

        {/* Play Button */}
        <button
          aria-label="Play Video"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300 group flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Red Box Overlay */}
        <div
          className={`absolute bottom-8 -left-12 bg-red-600 text-white p-6 w-48 rounded-xl shadow-xl border-4 border-white transition-transform duration-700 ease-out ${
            rightVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104.896-2 2-2h4v8h-4a2 2 0 01-2-2v-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11v6h4v-6H7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-base leading-snug">
            Highly Specialized Craft Compliance Team
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
