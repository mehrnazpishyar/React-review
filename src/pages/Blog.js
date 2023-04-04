import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
    // console.log(props)
//   const id = props.match.params.id;
  return (
    <>
      <h2>Blog detail</h2>
      <Link to="/blogs">go to blog page</Link>
    </>
  );
};

export default Blog;
