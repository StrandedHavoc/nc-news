import { useState } from "react";
import { postCommentToApi } from "../utils/api";

const PostComment = ({ article_id, comments }) => {
  const [newComment, setNewComment] = useState("");
  const [isError, setIsError] = useState(false);
  const [currComments, setComments] = useState(comments);
  const [isClicked, setIsClicked] = useState(false)
  

  const handleChange = (e) => setNewComment(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length < 0 || newComment.length > 50) {
      setIsError(true);
    } else {
      setIsError(false);
      setIsClicked(true)
      setComments((newComment) => [newComment, ...currComments])
      postCommentToApi(article_id, newComment)
        .then((res) => {
          setComments((newComment) => [newComment, ...currComments]);
        })
        .catch((error) => {
            setIsError('Your comment is too short or too long')
        });
      setNewComment("");
    }
  };

  const handleDisable = isClicked === true

  return (
    <>
      <h3 id="comment-header">Post a comment</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          id="comment-box"
          type="text"
          className="comment-input"
          value={newComment}
          onChange={handleChange}
        />
        <button className="comment-button" type="submit" disabled={handleDisable}>
          Comment
        </button>
        {isError ? (
          <p>{isError}</p>
        ) : (
          <p id="countdown">{50 - newComment.length} characters left</p>
        )}
      </form>
    </>
  );
};

export default PostComment;
