import { Link } from "react-router-dom";

const ArticleCard = ({ title, article_img_url, votes, article_id }) => {

  return (<Link to={`articles/${article_id}`}>
      <div className="article-thumbnails">
        <b>{title}</b>
        <br />
        <br />
        <img src={article_img_url} alt={title}></img> <br />
        Votes: {votes}
      </div>
      </Link>
  );
};

export default ArticleCard;
