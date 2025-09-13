import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-1.jpg",
    title: "Power Install",
    subtitle: "Electrical Company",
  },
  {
    src: "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-2.jpg",
    title: "Wire Setup",
    subtitle: "Electrical Company",
  },
  {
    src: "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-3.jpg",
    title: "Inspection",
    subtitle: "Electrical Company",
  },
  {
    src: "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-4.jpg",
    title: "System Maintenance",
    subtitle: "Electrical Company",
  },
  {
    src: "https://php.kodesolution.com/2025/electricien-php/images/resource/project1-5.jpg",
    title: "Safety Check",
    subtitle: "Electrical Company",
  },
];

const HomeElectricalServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#1b1919] py-16 px-4 md:px-10 lg:px-20 text-white">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <div className="flex items-center justify-center text-red-600 font-semibold mb-3 space-x-2 uppercase tracking-wide">
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/icons/title.png"
            alt="title icon"
            className="w-6 h-6"
          />
          <span>Our Work</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-4xl mx-auto leading-tight">
          We Offer Cost Efficient Electrical Services
        </h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative group overflow-hidden rounded-xl shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay (Always visible on mobile, hover on desktop) */}
              <div
                className={`
                  absolute inset-0 bg-black/60 flex items-end p-4 sm:p-6 transition-all duration-300
                  md:opacity-0 md:group-hover:opacity-100
                `}
              >
                {/* Arrow Button - Always visible on all screen sizes */}
                <Link to="/about" className="absolute left-4 bottom-4 z-20">
                  <div className="w-9 h-9 bg-red-600 flex items-center justify-center rounded-full shadow-md hover:bg-red-700 transition-colors active:scale-95">
                    <FaArrowRight className="text-white text-sm" />
                  </div>
                </Link>

                {/* Text Content */}
                <div
                  className={`
                    z-10 ml-4 bg-white/95 backdrop-blur px-4 py-3 rounded-md text-black shadow-lg
                    transition-all duration-500 ease-out
                    translate-y-0 md:translate-y-10 md:group-hover:-translate-y-6
                  `}
                >
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1 border-t pt-1 border-gray-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="mt-10 flex justify-center space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full transition-colors cursor-pointer duration-300 ${
              index === activeIndex ? "bg-red-600" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeElectricalServicesSlider;
