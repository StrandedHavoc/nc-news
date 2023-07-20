import { getComments } from "../utils/api";
import { useEffect, useState } from "react";

const CommentsCard = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id)
      .then((res) => {
        console.log(res, 'response in useEffect')
        setComments(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="comments">
      <b>Comments</b>
      <ul className="comments-list">
        {comments.map((comment) => {
          const { comment_id, body, votes, author } = comment;
          return (
            <li className="comment" key={comment_id}>
              <span className="comment-body">{body}</span>
              <br />
              <span className="author">@{author}</span>
              <br />
              <span className="votes">Votes: {votes}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsCard;
