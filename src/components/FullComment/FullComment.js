import React, { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteComment";
import { getAllComments } from "../../services/getAllComments";
import { getOneComment } from "../../services/getOneComment";
import "./fullComment.css";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((response) => setComment(response.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  let commentDetail = <p> please select a comment !</p>;

  if (commentId) commentDetail = <p> loading ...</p>;

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setSelectedId(null);
      setComment(null);
    } catch (error) {}
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
