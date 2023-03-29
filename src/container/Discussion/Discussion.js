import React, { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
import axios from "axios";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };



  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              body={c.body}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
