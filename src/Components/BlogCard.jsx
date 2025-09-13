import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure to install and setup react-router-dom

const BlogCard = ({ post }) => {
  if (!post) return null;

  const { id, title, img, author, date, category, comments } = post;
  const [day, month] = date ? date.split(' ') : ['--', '---'];

  return (
    <Link
      to={`/blog/${id}`}
      className="block max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
    >
      {/* Image + Date Badge */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-2 text-center rounded">
          <span className="block text-xl">{day}</span>
          <span className="block text-xs uppercase">{month}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Author & Category */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
          <div className="flex items-center space-x-1 group">
            <FaUser className="text-red-600 group-hover:text-red-700 transition-colors duration-300" />
            <span className="group-hover:text-red-700 transition-colors duration-300">
              By {author || 'Admin'}
            </span>
          </div>
          <div className="flex items-center space-x-1 group">
            <svg
              className="w-4 h-4 text-red-600 group-hover:text-red-700 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 00-2 2v11l5-3 5 3V5a2 2 0 00-2-2H5z" />
            </svg>
            <span className="capitalize group-hover:text-red-700 transition-colors duration-300">
              {category || 'General'}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2">{title}</h2>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-semibold text-sm">
          <span className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-700 transition-colors duration-300">
            READ MORE →
          </span>
          <div className="flex items-center space-x-1 text-red-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 3.866-3.582 7-8 7a8.06 8.06 0 01-3.906-.955L2 17l1.174-3.382A7.972 7.972 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
            </svg>
            <span>({String(comments || 0).padStart(2, '0')})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
