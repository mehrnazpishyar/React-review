import React, { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";

const FullComment = ({ commentId }) => {
  const [comment, setComments] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((response) => setComments(response.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  let commentDetail = <p> please select a comment !</p>;

  if (commentId) commentDetail = <p> loading ...</p>;

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  };

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name} </p>
        <p>{comment.email} </p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
