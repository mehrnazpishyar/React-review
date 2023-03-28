import axios from "axios";
import React, { useState } from "react";
import "./newComment.css";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
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
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>body</label>
        <input type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={postCommentHandler}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
