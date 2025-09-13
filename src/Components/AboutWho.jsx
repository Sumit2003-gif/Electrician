import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AboutWho = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white px-6 sm:px-12"
      aria-label="About Who We Are"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* LEFT: Images */}
        <div
          className={`relative w-full flex justify-center lg:justify-end transform transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Main Image */}
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/resource/about3-1.jpg"
            alt="Main worker"
            className="rounded-xl w-[80%] max-w-md sm:max-w-lg h-[350px] sm:h-[450px] md:h-[500px] object-cover border-4 border-white shadow-lg"
          />

          {/* Small overlay image */}
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/resource/about3-2.jpg"
            alt="Worker control"
            className="absolute top-10 right-[-30px] w-24 sm:w-28 md:w-36 border-4 border-white rounded-xl shadow-xl"
          />

          {/* Experience Badge */}
          <div className="absolute -bottom-10 left-8 bg-red-600 text-white px-6 py-4 rounded-lg flex items-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="font-bold text-xl">30+</p>
              <p className="text-sm">Years of experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div
          className={`pt-10 lg:pt-0 transform transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ transitionDelay: "350ms" }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://php.kodesolution.com/2025/electricien-php/images/icons/title.png"
              alt="Icon"
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
            <span className="uppercase text-red-600 font-semibold tracking-widest text-xs sm:text-sm">
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-wide">
            We provide best Electric Solution in town.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-8 max-w-xl leading-relaxed tracking-wide">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor
            incididunt ut labore et simply free text dolore magna aliqua.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5 mb-10 max-w-md">
            {[
              "Deliver Perfect Solution for business",
              "Readily Work With Global Brands solutions.",
              "Residential Business Installation",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-gray-800 text-base"
                style={{
                  transitionDelay: `${500 + index * 150}ms`,
                  transitionProperty: "opacity, transform",
                  transitionTimingFunction: "ease-out",
                  transitionDuration: "700ms",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="bg-red-500 text-white p-2 rounded-full mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Footer: Author + CTA */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-md"
            style={{
              transitionDelay: "1000ms",
              transitionProperty: "opacity, transform",
              transitionTimingFunction: "ease-out",
              transitionDuration: "700ms",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src="https://php.kodesolution.com/2025/electricien-php/images/resource/about1-thumb2.jpg"
                alt="Jessica Brown"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Jessica Brown</p>
                <p className="text-sm text-gray-500">Founder of company</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/">
            <button className="bg-red-600 hover:bg-red-700 transition cursor-pointer text-white px-6 py-3 rounded-md font-medium shadow-md whitespace-nowrap">
              Explore Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWho;
