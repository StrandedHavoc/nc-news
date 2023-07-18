import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
