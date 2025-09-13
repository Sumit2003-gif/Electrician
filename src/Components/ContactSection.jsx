import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, direction = "up", className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Message sent and saved locally!');
    setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left side: Form */}
      <AnimatedSection direction="left" className="space-y-6">
        <div>
          <h4 className="flex items-center text-red-600 font-semibold mb-3 space-x-2 text-sm sm:text-base">
            <FaPaperPlane />
            <span>SEND US EMAIL</span>
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">Feel free to write</h2>
          <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-100 rounded p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 rounded p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-100 rounded p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-100 rounded p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-100 rounded p-4 text-gray-700 w-full resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                type="submit"
                className="bg-red-600 cursor-pointer hover:bg-[#24201F] text-white font-semibold px-8 py-3 rounded transition w-full sm:w-auto"
              >
                SEND MESSAGE
              </button>
              <button
                type="reset"
                className="bg-red-600 text-white cursor-pointer font-semibold px-8 py-3 rounded hover:bg-[#24201F] transition w-full sm:w-auto"
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </AnimatedSection>

      {/* Right side: Contact info */}
      <AnimatedSection direction="right" className="space-y-8">
        <div>
          <h4 className="flex items-center text-red-600 font-semibold mb-3 space-x-2 text-sm sm:text-base">
            <FaPaperPlane />
            <span>NEED ANY HELP?</span>
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Get in touch with us</h2>
          <p className="mb-8 text-gray-600 max-w-lg leading-relaxed text-sm sm:text-base">
            Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
          </p>

          <div className="space-y-6 max-w-md">
            <div className="flex items-center space-x-6">
              <div className="bg-red-600 hover:bg-[#24201F] p-4 rounded text-white text-xl transition">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold">Have any question?</p>
                <p className="text-gray-500 text-lg">Free +92 (020)-9850</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-red-600 hover:bg-[#24201F] p-4 rounded text-white text-xl transition">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold">Write email</p>
                <p className="text-gray-500 text-lg">needhelp@company.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-red-600 hover:bg-[#24201F] p-4 rounded text-white text-xl transition">
                <FaPaperPlane />
              </div>
              <div>
                <p className="font-semibold">Visit anytime</p>
                <p className="text-gray-500 text-lg">66 Brooklyn Golden Street, New York</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded overflow-hidden shadow-lg max-w-md">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.886523135231!2d-73.99343868459337!3d40.71952697933068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1787f2b371%3A0x9d9e8e5bdecc8b7a!2s66%20Brooklyn%20Golden%20Street%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1679397374100!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactSection;
