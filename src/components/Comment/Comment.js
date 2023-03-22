import React from "react";
import "./comment.css";

const Comment = ({ name, email,onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </div>
  );
};

export default Comment;
