import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { written } from '../API/API';

const ShowBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const { products, fetchBlogs } = written();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (products.length === 0) {
      fetchBlogs();
    }
  }, [fetchBlogs, products.length]);

  useEffect(() => {
    if (id && products.length > 0) {
      const foundBlog = products.find((blog) => blog._id === id);
      setBlog(foundBlog);
    }
  }, [id, products]);

  if (!blog) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">{blog.Title}</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <p style={{ whiteSpace: 'pre-line' }}>{blog.Info}</p>
      </div>
    </div>
  );
};

export default ShowBlog