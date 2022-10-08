import React from "react";
import { Link } from "react-router-dom";

export const BlogList = ({ blogs, title, deleteHandler }) => {
  return (
    <div>
      <h2>{title}</h2>

      {/* mapping on array of objects to get outputting lists */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Writen By {blog.author}</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
