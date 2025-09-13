import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const data = [
  {
    url: "https://cdn-icons-png.flaticon.com/128/18714/18714463.png",
    header: "Reasonable Cost",
    text: "Lorem ipsum dolor sit amet conse adipiscing elit ridiculus",
  },
  {
    url: "https://cdn-icons-png.flaticon.com/128/15722/15722450.png",
    header: "Expert Electrician",
    text: "Lorem ipsum dolor sit amet conse adipiscing elit ridiculus",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const HomeWhoWeAre = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Image with hover effects */}
      <div
        data-aos="fade-up"
        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
      >
        {/* Red skewed shape behind */}
        <div
          className="hidden md:block absolute -left-14 top-0 bottom-0 w-16 bg-red-600 rounded-xl transform -skew-x-12 transition-all duration-500 ease-in-out"
          style={{ zIndex: 0 }}
        ></div>

        {/* Image */}
        <img
          src="https://php.kodesolution.com/2025/electricien-php/images/resource/about2-1.jpg"
          alt="Electrician working"
          className="w-full object-cover rounded-xl shadow-lg relative z-10 transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />

        {/* On hover, expand red shape */}
        <style jsx>{`
          .group:hover div {
            width: 24rem; /* expands red shape */
          }
        `}</style>
      </div>

      {/* Right Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-2 mb-4"
        >
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/icons/title.png"
            alt="Icon"
            className="w-8 h-8"
            loading="lazy"
          />
          <h3 className="uppercase text-red-600 font-semibold tracking-widest text-sm relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-500 after:hover:w-full cursor-pointer">
            Who We Are
          </h3>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
        >
          Providing <span className="text-red-600">High Quality</span>
          <br />
          Electrical Solution
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="underline text-xl text-red-600 font-semibold max-w-xl"
        >
          Our operations span the globe and encompass diverse sectors within the
          electrical industry.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 max-w-xl"
        >
          With over four decades of specialized expertise in Electrical services,
          catering to large-scale enterprises worldwide, we provide tailored
          end-to-end solutions crafted for you.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-xl"
        >
          {data.map(({ url, header, text }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4 p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={url}
                alt={header}
                className="w-14 h-14 mb-2"
                loading="lazy"
              />
              <h4 className="font-bold text-2xl text-gray-900">{header}</h4>
              <p className="text-gray-600">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeWhoWeAre;
