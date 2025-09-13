import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFileAlt,
  FaClipboardList,
  FaCheckCircle,
  FaUserTie,
  FaPhone,
} from "react-icons/fa";

const data = [
  {
    icon: <FaFileAlt className="w-6 h-6 text-white" />,
    header: "Consult case",
    text: "We offer personalized consultations to understand your needs and provide tailored electrical solutions.",
  },
  {
    icon: <FaClipboardList className="w-6 h-6 text-white" />,
    header: "Make Plan",
    text: "Detailed planning and analysis to ensure your electrical systems are efficient and reliable.",
  },
  {
    icon: <FaCheckCircle className="w-6 h-6 text-white" />,
    header: "Success Project",
    text: "Timely delivery and successful execution of your project with safety and satisfaction guaranteed.",
  },
];

const progressData = [
  { label: "Our Successful Work Story", value: 85 },
  { label: "Management", value: 75 },
];

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

const HomeQuality = () => {
  const progressRef = useRef();
  const isVisible = useOnScreen(progressRef, "-100px");
  const [progressWidths, setProgressWidths] = useState(progressData.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgressWidths(progressData.map((item) => item.value));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">
      {/* Left Side */}
      <div
        className="md:w-1/2 relative min-h-[600px] flex flex-col justify-center p-12 sm:p-16 text-white"
        data-aos="fade-right"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75"
          style={{
            backgroundImage:
              "url('https://demo.awaikenthemes.com/html-preview/movein/images/services-bg.png')",
          }}
          aria-hidden="true"
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-red-800/95"></div>

        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 uppercase leading-tight drop-shadow-lg">
          Electrical <br /> Services Are Often <br /> Considered.
        </h2>

        <div className="relative z-10 space-y-10">
          {data.map(({ icon, header, text }, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-5 rounded-lg p-4"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex-shrink-0 p-5 rounded-lg bg-red-900 shadow-lg flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1 drop-shadow-md text-white">
                  {header}
                </h3>
                <p className="text-sm leading-relaxed tracking-wide drop-shadow-sm text-white/90">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div
        className="md:w-1/2 bg-white p-12 sm:p-16 flex flex-col justify-center"
        data-aos="fade-left"
      >
        <p className="flex items-center text-red-600 font-semibold mb-6 uppercase text-sm tracking-widest space-x-3 select-none">
          <FaUserTie className="inline text-xl" />
          <span>Who We Are</span>
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight drop-shadow-sm">
          Providing quality <br /> electrical services to all
        </h1>

        <p className="text-gray-700 mb-12 max-w-xl tracking-wide leading-relaxed text-lg">
          With over four decades of experience providing solutions to large-scale
          enterprises throughout the globe, we offer end-to-end electrical services
          tailored to specific markets.
        </p>

        {/* Progress Bars */}
        <div
          className="mb-12 max-w-xl space-y-8"
          ref={progressRef}
          aria-label="Progress bars showing work story and management progress"
        >
          {progressData.map(({ label }, idx) => (
            <div key={label}>
              <div className="flex justify-between mb-2 font-semibold text-gray-800">
                <span>{label}</span>
                <span>{progressWidths[idx]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
                <div
                  className="bg-red-600 h-5 rounded-full transition-all duration-[2000ms] ease-in-out"
                  style={{ width: `${progressWidths[idx]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call Section */}
        <div className="flex items-center space-x-6 max-w-xl">
          <div className="bg-red-600 p-5 rounded-full text-white shadow-lg">
            <FaPhone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-600 text-base select-none">Call Anytime</p>
            <p className="font-extrabold text-2xl select-text">+00 (1111) 2222</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuality;
