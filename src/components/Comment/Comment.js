import React from "react";
import "./comment.css";

const Comment = ({ name, email }) => {
  return (
    <div className="comment">
      <p>name : {name}</p>
      <p>email : {email}</p>
    </div>
  );
};

export default Comment;
