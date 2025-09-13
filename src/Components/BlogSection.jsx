import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import BlogCard from "./BlogCard";
import { blogPosts } from "./BlogPost";

// ScrollReveal animation wrapper (fade + slide on scroll)
const ScrollReveal = ({ children, direction = "up", className = "" }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let translateClass = "";
  switch (direction) {
    case "up":
      translateClass = visible ? "translate-y-0" : "translate-y-8";
      break;
    case "down":
      translateClass = visible ? "translate-y-0" : "-translate-y-8";
      break;
    case "left":
      translateClass = visible ? "translate-x-0" : "-translate-x-8";
      break;
    case "right":
      translateClass = visible ? "translate-x-0" : "translate-x-8";
      break;
    default:
      translateClass = visible ? "translate-y-0" : "translate-y-8";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out opacity-${
        visible ? "100" : "0"
      } ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
};

const BlogSection = () => {
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <ScrollReveal direction="up" className="text-center mb-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Latest Blog Posts
        </h2>
        <p className="text-gray-600">
          Stay up-to-date with tips, safety advice, and trends in the electrical world.
        </p>
      </ScrollReveal>

      {/* Layout with Sidebar + Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="space-y-12 lg:col-span-1">
          {/* Recent Posts */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id} className="flex items-start gap-4">
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex gap-4 hover:text-red-600 transition-colors duration-300"
                    >
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded shadow-md"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Categories */}
          <ScrollReveal direction="left" className="mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1 rounded-full text-sm border font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-red-600 text-white border-red-600 shadow-md"
                        : "border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </aside>

        {/* Blog Grid */}
        <ScrollReveal direction="right" className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <BlogCard
                key={index}
                post={post}
                className="transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {[...Array(totalPages)].map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full font-semibold border transition-all duration-300 ${
                      currentPage === page
                        ? "bg-red-600 text-white border-red-600 shadow-md"
                        : "text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600"
                    }`}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
