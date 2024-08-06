import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './BlogList.css'

import Navbar from '../navbar';
import Footer from '../Footer';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Exploring the Wonders of Astana',
    excerpt: 'Discover the beauty of Astana',
    date: '2024-08-01',
    imageUrl: 'https://via.placeholder.com/150x150?text=Astana',
  },
  {
    id: 2,
    title: 'A Journey Through the Almaty',
    excerpt: 'Experience the breathtaking views and outdoor adventures in the Almaty',
    date: '2024-07-15',
    imageUrl: 'https://via.placeholder.com/150x150?text=Almaty', 
  },
  {
    id: 3,
    title: 'Exploring the Streets of Shymkent',
    excerpt: 'Immerse yourself in the charm of Shymkent',
    date: '2024-06-30',
    imageUrl: 'https://via.placeholder.com/150x150?text=Shymkent', 
  },
];

const BlogItem: React.FC<{ blog: Blog }> = ({ blog }) => (
  <div className="blog-item">
    <img src={blog.imageUrl} alt={blog.title} className="blog-images" />
    <div className="blog-content">
      <h2>{blog.title}</h2>
      <p className="date">{blog.date}</p>
      <p>{blog.excerpt}</p>
      <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
    </div>
  </div>
);

const BlogList: React.FC = () => (
  <div>
    <Navbar />
    <div className="blog-list">
      <h1>Tourism Blog List</h1>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
    <Footer/>
  </div>
);

export default BlogList;
