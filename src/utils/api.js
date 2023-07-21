import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://coffeenews.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentToApi = (article_id, comment) => {
  const string2Num = Number(article_id);
  console.log("converted article id", string2Num);
  console.log(comment, "<<this is my comment");

  return newsApi
    .post(`/articles/${string2Num}/comments`, {
      body: `${comment}`,
      username: "grumpy19",
    })
    .then((res) => {
      console.log(Object.keys(res), "here in api");
      return res.data;
    });
};
