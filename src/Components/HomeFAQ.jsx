import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "Our mission is to design, innovative",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia eget, feugiat felis sociis ad augue senectus ligula.",
  },
  {
    question: "Is this theme support powerful options?",
    answer: "Yes, this theme supports various powerful customization options.",
  },
  {
    question: "We will continue to build and nurture",
    answer:
      "We keep updating and nurturing the product to meet customer expectations and industry standards.",
  },
];

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* Left Side */}
      <div>
        {/* Capabilities Header */}
        <div
          className="flex items-center space-x-3 mb-6"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/icons/title.png"
            alt="Icon"
            className="w-6 h-6"
          />
          <span className="uppercase text-red-600 font-semibold tracking-widest text-sm">
            CAPABILITIES
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl font-extrabold mb-6 leading-tight text-gray-900"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Services that help our <br /> customers meet
        </h2>

        {/* Paragraph */}
        <p
          className="text-gray-600 max-w-xl mb-10 text-base leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          With over four decades of experience providing solutions to
          large-scale enterprises throughout the globe, we offer end-to-end.
        </p>

        {/* Accordion */}
        <div className="max-w-xl" data-aos="fade-up" data-aos-delay="400">
          {faqData.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={i} className="mb-4 last:mb-0">
                <div
                  className={`flex justify-between items-center w-full px-6 py-4 font-semibold text-lg rounded-md
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-gray-900 hover:bg-gray-100 cursor-default"
                    }
                  `}
                >
                  <span>{item.question}</span>
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                    aria-expanded={isActive}
                    aria-label={`Toggle answer for question ${i + 1}`}
                    className="focus:outline-none cursor-pointer"
                    type="button"
                  >
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke={isActive ? "white" : "currentColor"}
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isActive ? "M19 15l-7-7-7 7" : "M9 5l7 7-7 7"}
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isActive ? "max-h-96" : "max-h-0"
                  } bg-white text-gray-600 px-6 rounded-b-md shadow-inner text-base leading-relaxed`}
                  style={{ willChange: "max-height" }}
                >
                  <p className="py-4">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side */}
      <div
        className="flex flex-col items-center lg:items-end space-y-12"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        {/* Rating Box */}
        <div className="border border-red-600 z-12 rounded-md px-8 -left-[350px] top-36 py-3 text-center  relative w-56">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.042 6.292a1 1 0 00.95.69h6.623c.969 0 1.371 1.24.588 1.81l-5.36 3.89a1 1 0 00-.364 1.118l2.042 6.292c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.36 3.89c-.784.57-1.838-.197-1.539-1.118l2.041-6.292a1 1 0 00-.364-1.118l-5.36-3.89c-.783-.57-.38-1.81.588-1.81h6.623a1 1 0 00.95-.69l2.042-6.292z"
              />
            </svg>
          </div>

          <div className="flex justify-center space-x-1 text-yellow-400 mb-3 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.042 6.292a1 1 0 00.95.69h6.623c.969 0 1.371 1.24.588 1.81l-5.36 3.89a1 1 0 00-.364 1.118l2.042 6.292c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.36 3.89c-.784.57-1.838-.197-1.539-1.118l2.041-6.292a1 1 0 00-.364-1.118l-5.36-3.89c-.783-.57-.38-1.81.588-1.81h6.623a1 1 0 00.95-.69l2.042-6.292z" />
              </svg>
            ))}
          </div>

          <p className="font-extrabold text-gray-900 text-xl tracking-wide">
            4.5{" "}
            <span className="font-semibold text-gray-600 text-sm">
              (1,200 reviews)
            </span>
          </p>
        </div>

        {/* Image */}
        <div className="w-[400px] h-[600px] relative rounded-3xl overflow-hidden  cursor-pointer group transition-transform duration-500 hover:scale-[1.05] hover:shadow-red-400">
          <img
            src="https://php.kodesolution.com/2025/electricien-php/images/resource/faq1-1.png"
            alt="Electrician"
            className="w-full h-[90vh] rounded-3xl object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
