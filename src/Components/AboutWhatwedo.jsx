import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "House Maintenance",
    description:
      "Professional installation and maintenance of backup generators for uninterrupted power.",
    icon: "https://php.kodesolution.com/2025/electricien-php/images/icons/service-1.png",
    image: "https://php.kodesolution.com/2025/electricien-php/images/resource/service3-1.jpg",
  },
  {
    title: "Air Conditioning",
    description:
      "Modernize electrical panels to handle increased power demands and improve reliability.",
    icon: "https://php.kodesolution.com/2025/electricien-php/images/icons/service-2.png",
    image: "https://php.kodesolution.com/2025/electricien-php/images/resource/service3-2.jpg",
  },
  {
    title: "Indoor Lighting",
    description:
      "Comprehensive solutions for flickering lights and new fixture installations.",
    icon: "https://php.kodesolution.com/2025/electricien-php/images/icons/service-3.png",
    image: "https://php.kodesolution.com/2025/electricien-php/images/resource/service3-3.jpg",
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            const index = Number(target.getAttribute("data-index"));
            setVisibleCards((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".service-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#151515] py-20 text-white relative overflow-hidden px-6 sm:px-12"
      aria-label="What We Do"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 relative z-20 transform transition-all duration-700 ease-out ${
            visibleCards.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <img
              src="https://php.kodesolution.com/2025/electricien-php/images/icons/title.png"
              alt="section-icon"
              className="w-6 h-6"
            />
            <span className="text-red-600 uppercase text-sm font-semibold tracking-widest">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We Offer Cost Efficient <br /> Electrical Services
          </h2>
        </div>

        {/* Cards Grid with Background Image */}
        <div className="relative mt-12">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://php.kodesolution.com/2025/electricien-php/images/resource/service3-2.jpg')",
              opacity: 0.12,
            }}
            aria-hidden="true"
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {services.map((service, index) => (
              <div
                key={index}
                data-index={index}
                className={`service-card bg-white text-gray-900 rounded-xl overflow-hidden shadow-xl group transform transition-all duration-500 cursor-pointer
                  ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover"
                  />
                  {/* Icon Box */}
                  <div className="absolute -bottom-6 left-6 bg-red-600 p-3 rounded-md shadow-lg w-14 h-14 flex items-center justify-center">
                    <img src={service.icon} alt={`${service.title} icon`} className="w-6 h-6 invert" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-10 px-6 pb-6 relative z-10">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                  {/* Read More Button */}
                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href="/"
                      className="text-sm font-semibold text-gray-900 flex items-center gap-2 transition-all duration-300 px-3 py-2 rounded-md group-hover:bg-red-600 group-hover:text-white"
                    >
                      READ MORE
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.293 9.293a1 1 0 011.414 0L17 12.586 18.707 11.293a1 1 0 00-1.414-1.414L13 13.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
