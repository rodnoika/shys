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
    title: 'Exploring the Wonders of Kyoto',
    excerpt: 'Discover the beauty of Kyoto, Japan, with its historic temples, stunning gardens, and traditional tea houses...',
    date: '2024-08-01',
    imageUrl: 'https://via.placeholder.com/150x150?text=Astana', // Example URL
  },
  {
    id: 2,
    title: 'A Journey Through the Swiss Alps',
    excerpt: 'Experience the breathtaking views and outdoor adventures in the Swiss Alps, from skiing to hiking...',
    date: '2024-07-15',
    imageUrl: 'https://via.placeholder.com/150x150?text=Almaty', // Example URL
  },
  {
    id: 3,
    title: 'Exploring the Streets of Paris',
    excerpt: 'Immerse yourself in the charm of Paris, France, with its iconic landmarks, delicious cuisine, and vibrant culture...',
    date: '2024-06-30',
    imageUrl: 'https://via.placeholder.com/150x150?text=Shymkent', // Example URL
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
