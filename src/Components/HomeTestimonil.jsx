import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  { id: 1, name: "Mark Wooden", role: "Admin", title: "Great Service", rating: 5, description: "Build and implement innovative, profitable and sustainable products and services that help", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Dolis Uperesy", role: "CEO, Electrica", title: "Great Service", rating: 5, description: "Build and implement innovative, profitable and sustainable products and services that help", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 3, name: "Ronal Bryan", role: "CEO, Electrica", title: "Great Service", rating: 5, description: "Build and implement innovative, profitable and sustainable products and services that help", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 4, name: "Mark Wooden", role: "Admin", title: "Great Service", rating: 5, description: "Build and implement innovative, profitable and sustainable products and services that help", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 5, name: "Dolis Uperesy", role: "CEO, Electrica", title: "Great Service", rating: 5, description: "Build and implement innovative, profitable and sustainable products and services that help", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 6, name: "Ronal Bryan", role: "CEO, Electrica", title: "Great Service", rating: 5, description: "Build and implement innovative, profitable and sustainable products and services that help", img: "https://randomuser.me/api/portraits/women/65.jpg" },
];

const Stars = ({ count }) => (
  <div className="flex justify-center gap-1 text-red-600 mb-3" aria-label={`${count} star rating`}>
    {[...Array(count)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.04 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    ))}
  </div>
);

const HomeTestimonialsSlider = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-gray-100 py-16 px-4 md:px-6 xl:px-12 max-w-7xl mx-auto text-center transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0 translate-y-12"
      }`}
      aria-label="Testimonials Section"
    >
      {/* Header */}
      <div
        className={`mb-12 max-w-3xl mx-auto transition-transform duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="text-red-600 font-bold uppercase text-sm flex items-center justify-center gap-2 mb-2 tracking-widest">
          <span>OUR TESTIMONIALS</span>
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Professional, Reliable <br /> & Cost Effective
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
          renderBullet: (index, className) =>
            `<span class="${className} inline-block w-10 h-1 bg-red-400 rounded transition-all duration-300 mx-1"></span>`,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="cursor-grab"
      >
        {testimonials.map(({ id, name, role, title, rating, description, img }) => (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <div
                className={`relative bg-white py-12 px-6 md:px-8 text-center rounded-xl shadow-xl transition-transform duration-500 ease-in-out 
                ${isActive ? "scale-110 shadow-3xl z-30" : "scale-100 opacity-100"}
                hover:scale-105 hover:shadow-2xl`}
                aria-label={`Testimonial from ${name}`}
              >
                {/* Background shape effect */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gray-100 rounded-t-xl clip-diagonal"></div>

                {/* Profile Image */}
                <div className="w-28 h-28 mx-auto mb-4 z-10 relative rounded-full border-[5px] border-red-600 overflow-hidden shadow-md bg-white">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h4 className="text-lg font-bold mb-1">{title}</h4>
                <Stars count={rating} />
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <p className="font-bold text-base">{name}</p>
                <p className="text-red-600 text-sm">{role}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Container */}
      <div className="custom-swiper-pagination mt-10 flex justify-center items-center" />

      {/* Additional styles */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);
        }

        /* Pagination bullets styled as lines */
        .swiper-pagination-bullet {
          opacity: 0.6;
          width: 40px !important;
          height: 4px !important;
          border-radius: 9999px;
          background-color: #f87171; /* Tailwind red-400 */
          transition: width 0.3s ease, opacity 0.3s ease;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 60px !important;
          background-color: #b91c1c !important; /* Tailwind red-800 */
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonialsSlider;
