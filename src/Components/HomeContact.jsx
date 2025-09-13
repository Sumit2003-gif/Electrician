import React, { useState, useEffect } from "react";
import { FaTools, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Expert Electricians",
    description:
      "We strongly support best practice sharing across our operations around the world.",
    icon: <FaBolt size={24} color="white" />,
  },
  {
    title: "Quality Services",
    description:
      "We strongly support best practice sharing across our operations around the world.",
    icon: <FaTools size={24} color="white" />,
  },
];

const STORAGE_KEY = "requestQuoteFormData";

const HomeRequestQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    budget: 750,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });

    // Load from localStorage on mount
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFormData(JSON.parse(stored));
      setSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "budget" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert(
        "Please fill in all required fields (First Name, Last Name, Email, Message)"
      );
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setSubmitted(true);
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      budget: 750,
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[700px] rounded-lg overflow-hidden shadow-lg">
      {/* Left Form Section */}
      <div
        className="relative flex flex-col justify-center p-8 md:p-10 text-white"
        style={{
          backgroundImage:
            "url('https://php.kodesolution.com/2025/electricien-php/images/background/4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-aos="fade-right"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-red-900/90 z-0"></div>

        <h2 className="relative z-10 text-center font-bold text-3xl mb-8 tracking-wider">
          Request A Quote
        </h2>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6"
            noValidate
            autoComplete="off"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-black shadow-md"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-black shadow-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-black shadow-md"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-black shadow-md"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-black shadow-md"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white text-black shadow-md"
              />
            </div>

            <div className="mt-2 relative z-10">
              <label className="font-semibold mb-1 block tracking-wide">
                Budget Range: <span>{formData.budget}</span>
              </label>
              <input
                type="range"
                name="budget"
                min="0"
                max="1500"
                step="10"
                value={formData.budget}
                onChange={handleChange}
                className="w-full cursor-pointer accent-red-600"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white resize-none bg-white text-black shadow-md"
              required
            />

            <button
              type="submit"
              className="w-full cursor-pointer bg-black text-white font-semibold py-4 rounded-md hover:bg-gray-900 transition-colors"
            >
              SUBMIT REQUEST
            </button>
          </form>
        ) : (
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p>Your request has been submitted successfully.</p>
            <button
              onClick={handleReset}
              className="mt-6 bg-white text-red-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>

      {/* Right Info Section */}
      <div
        className="relative flex flex-col justify-center p-10 text-white min-h-[700px] bg-black bg-opacity-70"
        style={{
          backgroundImage:
            "url('https://php.kodesolution.com/2025/electricien-php/images/background/3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-aos="fade-left"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5 z-0 rounded-r-lg"></div>

        <div className="relative z-10 max-w-xl mx-auto space-y-10">
          <div className="flex items-center space-x-2 mb-4" data-aos="fade-up" data-aos-delay="200">
            <FaTools size={28} className="text-red-600" />
            <span className="uppercase text-red-600 font-bold tracking-widest text-sm">
              FEATURES
            </span>
          </div>

          <h2
            className="text-4xl font-extrabold leading-snug"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Services that help our <br /> customers meet
          </h2>

          <p
            className="text-gray-300 leading-relaxed text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We strongly support best practice sharing across our operations
            around the world and across various transportation sectors. Lorem
            ipsum dolor sit am adipi we help you ensure everyone.
          </p>

          <div className="space-y-8" data-aos="fade-up" data-aos-delay="500">
            {features.map(({ title, description, icon }, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="bg-red-700 p-4 rounded-lg shadow-lg flex items-center justify-center w-14 h-14 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-gray-300 mt-1 leading-snug">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRequestQuote;
