import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res);
        setIsLoading(false)
      })
      .catch((error) => {
        setApiError(error);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>
  }

  if (apiError) {
    return (
      <Error
        errorStatus={apiError.response.status}
        errorMessage={apiError.response.data.msg}
      />
    );
  }

  return (
    <ul className="articles-list">
      {articles.map((article) => {
        const { article_img_url, title, votes, article_id } = article;
        return (
          <li key={article_id}>
            <ArticleCard
              article_id={article_id}
              title={title}
              article_img_url={article_img_url}
              votes={votes}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
