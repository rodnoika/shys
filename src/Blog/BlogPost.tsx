import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css'; // Create this file for custom styles
import Navbar from '../navbar';
import Footer from '../Footer';

// Define the blog data type
interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
}

const blogPosts: Blog[] = [
  {
    id: 1,
    title: 'Exploring the Wonders of Astana',
    content: 'Full content about Astana...',
    date: '2024-08-01',
    imageUrl: 'https://via.placeholder.com/800x400?text=Astana',
  },
  {
    id: 2,
    title: 'A Journey Through the Almaty',
    content: 'Full content about the Almaty...',
    date: '2024-07-15',
    imageUrl: 'https://via.placeholder.com/800x400?text=Almaty',
  },
  {
    id: 3,
    title: 'Exploring the Streets of Shymkent',
    content: 'Full content about Shymkent...',
    date: '2024-06-30',
    imageUrl: 'https://via.placeholder.com/800x400?text=Shymkent',
  },
];

// Component to display a single blog post
const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find(blog => blog.id === parseInt(id!));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="blog-post">
        <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
        <div className="blog-content">
          <h1>{blog.title}</h1>
          <p className="date">{blog.date}</p>
          <p>{blog.content}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogPost;
