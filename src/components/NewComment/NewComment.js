import axios from "axios";
import React, { useState } from "react";
import "./newComment.css";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const nameHandler = (e) => {
    setComment({ ...comment, name: e.target.value });
  };

  const emailHandler = (e) => {
    setComment({ ...comment, email: e.target.value });
  };

  const contentHandler = (e) => {
    setComment({ ...comment, content: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments",{...comment,postId:10} )
      .then((res)=> console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="newComment">
      <h2>Add New Comment</h2>
      <div>
        <label>name</label>
        <input type="text" onChange={nameHandler} />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={emailHandler} />
      </div>
      <div>
        <label>body</label>
        <input type="textarea" onChange={contentHandler} />
      </div>
      <button onClick={postCommentHandler}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
