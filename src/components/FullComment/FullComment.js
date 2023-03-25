import React, { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";

const FullComment = ({ commentId }) => {
  const [comment, setComments] = useState(null);
  console.log("comment:" + comment);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((response) => setComments(response.data))
      .catch((error)=> console.log(error));
  }, [commentId]);

  if (!commentId) return <p style={{marginBottom:"20px"}}>please select a comment !</p>;
  return (
    <div className="fullComment">
      <p>{comment.name} </p>
      <p>{comment.email} </p>
      <p>{comment.body}</p>
    </div>
  );
};

export default FullComment;
