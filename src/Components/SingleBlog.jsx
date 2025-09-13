import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./BlogPost";
import { FaQuoteLeft } from "react-icons/fa";

// ScrollReveal animation wrapper (fade + slide)
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

const SingleBlog = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20 px-4">
        <h2 className="text-2xl font-semibold text-gray-700">Blog post not found.</h2>
        <Link
          to="/blog"
          className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb Navigation */}
      <ScrollReveal direction="left" className="text-sm mb-6">
        <nav aria-label="Breadcrumb">
          <ol className="list-reset flex flex-wrap text-gray-600 gap-1 sm:gap-2">
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Home
              </Link>
              <span className="mx-1">/</span>
            </li>
            <li>
              <Link to="/blog" className="hover:text-red-600 transition">
                Blog
              </Link>
              <span className="mx-1">/</span>
            </li>
            <li
              className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-sm"
              aria-current="page"
              title={post.title}
            >
              {post.title.length > 40 ? post.title.substring(0, 40) + "..." : post.title}
            </li>
          </ol>
        </nav>
      </ScrollReveal>

      {/* Back Button */}
      <ScrollReveal direction="left">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-block text-red-600 hover:text-red-700 font-semibold transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </ScrollReveal>

      {/* Hero Image with Overlay and Text */}
      <ScrollReveal direction="up">
        <div className="relative mb-12 rounded-lg overflow-hidden shadow-lg h-72 sm:h-96">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg leading-tight mb-2">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center space-x-3 text-xs sm:text-sm opacity-90 font-medium drop-shadow-md">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="capitalize">{post.category}</span>
              <span>•</span>
              <span>{post.comments} Comments</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Blog Content */}
      <ScrollReveal direction="up" className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-16">
        {/* Using post.content if available, else fallback to static text */}
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <>
            <p>
              Working with electrical systems is not just about connecting wires — it’s about ensuring safety,
              efficiency, and longevity in every home or commercial space. Whether you're dealing with rewiring an old
              property or planning the electrical layout for a new build, knowing the basics and best practices is
              essential.
            </p>
            <h2>Understanding the Foundation</h2>
            <p>
              A professional electrician evaluates load demands, circuit plans, and safety compliance before even
              picking up a tool. From GFCI installations in bathrooms to ensuring proper grounding and surge protection,
              every detail matters.
            </p>
            <h2>Tips for Homeowners</h2>
            <p>
              Always hire a licensed electrician for major projects, but keep an eye out for warning signs like flickering
              lights, hot outlets, or frequent breaker trips. Preventative checks can save lives.
            </p>
            <h2>Final Thoughts</h2>
            <p>
              Electrical systems are the backbone of any building — treat them with the respect and precision they demand.
              Whether you're a DIY enthusiast or a property manager, understanding core concepts and collaborating with
              certified professionals ensures safety for everyone.
            </p>
          </>
        )}
      </ScrollReveal>

      {/* Comments Section */}
      <ScrollReveal direction="up" className="mb-16">
        <div>
          <div className="flex items-center mb-6">
            <FaQuoteLeft className="text-2xl text-red-600 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>
          </div>

          {/* Static comments */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="font-medium text-gray-700">Ramesh Kumar</p>
              <p className="text-sm text-gray-600">“Great article! I learned a lot about safety tips.”</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="font-medium text-gray-700">Sneha Patil</p>
              <p className="text-sm text-gray-600">“Very helpful for homeowners! Please write more on surge protection.”</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Leave a Comment Form */}
      <ScrollReveal direction="up">
        <div className="bg-white p-8 rounded-lg shadow-lg border max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Leave a Comment</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default SingleBlog;
