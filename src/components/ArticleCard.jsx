import { Link } from "react-router-dom";

const ArticleCard = ({ title, article_img_url, votes, article_id }) => {

  return (<Link to={`articles/${article_id}`}>
      <div className="article-thumbnails">
        <strong>{title}</strong>
        <br />
        <br />
        <img src={article_img_url} alt="article thumbnail"></img> <br />
        Votes: {votes}
      </div>
      </Link>
  );
};

export default ArticleCard;
