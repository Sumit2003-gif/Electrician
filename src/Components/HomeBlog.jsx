import React, { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for routing

// Sample blogPosts data
const blogPosts = [
  {
    id: 1,
    title: "Smart Home Wiring A Guide for Modern Electricians",
    author: "admin",
    category: "electrical",
    date: "12 OCT",
    comments: 5,
    img: "https://php.kodesolution.com/2025/electricien-php/images/resource/news-1.jpg",
    link: "/blog/1"  // Use consistent route for blog detail
  },
  {
    id: 2,
    title: "Latest Innovations in Electrical Safety Systems",
    author: "john_doe",
    category: "safety",
    date: "20 SEP",
    comments: 8,
    img: "https://php.kodesolution.com/2025/electricien-php/images/resource/news-2.jpg",
    link: "/blog/2"
  },
  {
    id: 3,
    title: "How to Choose Energy Efficient Lighting for Your Home",
    author: "jane_smith",
    category: "lighting",
    date: "05 AUG",
    comments: 3,
    img: "https://php.kodesolution.com/2025/electricien-php/images/resource/news-3.jpg",
    link: "/blog/3"
  }
];

const BlogCard = ({ post, animate }) => (
  <Link
    to={post.link}
    className={`block max-w-sm bg-white rounded-lg shadow-md overflow-hidden
               transition-transform transition-shadow duration-500 cursor-pointer
               hover:shadow-2xl hover:scale-[1.03]
               ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    style={{ transitionDelay: '150ms' }}
  >
    <div className="relative overflow-hidden">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-2 text-center rounded shadow-lg">
        <span className="block text-xl">{post.date.split(' ')[0]}</span>
        <span className="block text-xs uppercase">{post.date.split(' ')[1]}</span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
        <div className="flex items-center space-x-1 group">
          <FaUser color='red' className="group-hover:text-red-700 transition-colors duration-300" />
          <span className="group-hover:text-red-700 transition-colors duration-300">By {post.author}</span>
        </div>
        <div className="flex items-center space-x-1 group">
          <svg
            className="w-4 h-4 text-red-600 group-hover:text-red-700 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5 3a2 2 0 00-2 2v11l5-3 5 3V5a2 2 0 00-2-2H5z" />
          </svg>
          <span className="capitalize group-hover:text-red-700 transition-colors duration-300">{post.category}</span>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-3 text-gray-900">{post.title}</h2>

      <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-semibold text-sm">
        <span className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-700 transition-colors duration-300">
          READ MORE →
        </span>
        <div className="flex items-center space-x-1 text-red-600">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 10c0 3.866-3.582 7-8 7a8.06 8.06 0 01-3.906-.955L2 17l1.174-3.382A7.972 7.972 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
          </svg>
          <span>({post.comments.toString().padStart(2, '0')})</span>
        </div>
      </div>
    </div>
  </Link>
);

const HomeBlog = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 py-16
                  transition-opacity duration-1000 ease-out
                  ${visible ? "opacity-100" : "opacity-0 translate-y-12"}`}
      aria-label="Latest Blog Posts"
    >
      <div className="flex items-center justify-center text-red-600 font-semibold mb-3 space-x-2 uppercase tracking-wide">
        <img
          src="https://php.kodesolution.com/2025/electricien-php/images/icons/title.png"
          alt="Our Blog Icon"
          className="w-6 h-6"
        />
        <span className="text-sm md:text-base">Our Blog</span>
      </div>

      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center
                   transform transition-transform duration-700
                   ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        Check Latest Blog Post<br />from Blog List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} animate={visible} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center">
        <Link
          to="/blog"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-300 font-semibold"
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default HomeBlog;
