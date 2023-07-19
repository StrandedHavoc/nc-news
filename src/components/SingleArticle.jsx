import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [apiError, setApiError] = useState(null);
  
  useEffect(() => {
      getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
      })
      .catch((error) => {
        setApiError(error);
      });
  }, [article_id]);

  if (apiError) {
    return (
      <Error
        errorStatus={apiError.response.status}
        errorMessage={apiError.response.data.msg}
      />
    );
  }

  return <p>
    <strong>{article.title}</strong><br /><br />
  <img src={article.article_img_url} alt="article image "></img><br />
  By {article.author}<br /><br />
  {article.body}<br /><br />
  Topic: {article.topic}<br /><br />
  Votes: {article.votes}<br />
  </p>;
};

export default SingleArticle;
