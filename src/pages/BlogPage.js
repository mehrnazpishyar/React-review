import React from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <div>
      <h2> BlogPage</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default BlogPage;
