import React, { useState, useEffect } from "react";
import BlogSection from "../Components/BlogSection";
import  {Link} from "react-router-dom"
const Blog = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // trigger animation after mount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://php.kodesolution.com/2025/electricien-php/images/background/page-title.jpg')",
        }}
      >
        {/* Overlay with fade-in */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
            animate ? "opacity-60" : "opacity-0"
          }`}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Blog
          </h1>
          <p
            className={`text-xs sm:text-sm md:text-base text-gray-300 transition-all duration-1000 delay-200 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
             <Link to="/"><span className="hover:underline cursor-pointer hover:text-red-500">Home</span></Link>  &gt; Blog
          </p>
        </div>
      </section>

      {/* Your BlogSection below */}
      <section>
        <BlogSection />
      </section>
    </div>
  );
};

export default Blog;
