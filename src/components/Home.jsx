import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <p>Loading Articles...</p>
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
