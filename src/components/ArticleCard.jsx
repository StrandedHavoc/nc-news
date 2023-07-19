const ArticleCard = ({title, article_img_url, votes}) => {
    
    return <section className="article-thumbnails">
        <strong>{title}</strong><br /><br />
        <img src={article_img_url} alt="article thumbnail"></img> <br />
        Votes: {votes} 
        </section>
}

export default ArticleCard;