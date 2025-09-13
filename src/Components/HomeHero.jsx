import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const slides = [
  {
    bg: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg",
    smallText: "We Help You Electrical Services",
    bigTextSequence: [
      "We Build Quality Electrician",
      3000,
      "Powering Your Home Safely",
      3000,
      "Reliable & Efficient Electrician",
      3000,
    ],
    buttonText: "Contact Us Now",
  },
  {
    bg: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
    smallText: "Expert Electrical Solutions",
    bigTextSequence: [
      "Powering Your Home Safely",
      3000,
      "Reliable & Efficient Electrician",
      3000,
      "We Build Quality Electrician",
      3000,
    ],
    buttonText: "Contact Us Now",
  },
  {
    bg: "https://images.pexels.com/photos/3945662/pexels-photo-3945662.jpeg",
    smallText: "Your Trusted Electricians",
    bigTextSequence: [
      "Reliable & Efficient Electrician",
      3000,
      "We Build Quality Electrician",
      3000,
      "Powering Your Home Safely",
      3000,
    ],
    buttonText: "Contact Us Now",
  },
];

const PAUSE_DURATION = 6000; // total time per slide

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    // Auto change slides every PAUSE_DURATION (6s)
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => {
        setFlash(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 350); // flash duration 350ms
    }, PAUSE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[110vh] sm:h-[100vh] overflow-hidden w-full">
      {/* Flash white overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-white z-40"
          />
        )}
      </AnimatePresence>

      {/* Background slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
        >
          <div className="absolute inset-0 bg-red-700/40"></div>

          {/* Back Text */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent font-extrabold hidden lg:block"
            style={{
              fontSize: "10rem",
              WebkitTextStroke: "1px white",
              whiteSpace: "nowrap",
            }}
          >
            Electrician
          </motion.h2>

          {/* Main Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-lg font-medium uppercase tracking-widest mb-4"
            >
              {slides[currentSlide].smallText}
            </motion.h3>

            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-pre-line mb-6 min-h-[4rem]"
            >
              <TypeAnimation
                sequence={slides[currentSlide].bigTextSequence}
                speed={50}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ whiteSpace: "pre-line", display: "inline-block" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <button className="bg-red-600 px-8 cursor-pointer py-3 md:px-10 md:py-4 uppercase text-lg font-bold hover:bg-red-700 transition rounded-lg shadow-lg">
                  {slides[currentSlide].buttonText}
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              idx === currentSlide
                ? "bg-red-600 border-red-600"
                : "bg-white/60 border-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
  