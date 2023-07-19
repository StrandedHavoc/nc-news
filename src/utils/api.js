import axios from "axios"


const newsApi = axios.create({
    baseURL: 'https://coffeenews.onrender.com/api'
})

export const getArticles = () => {
    return newsApi
    .get('/articles')
    .then(({data}) => {
        return data.articles
    })
    .catch((error) => {
        console.log(error)
    })
}

export const getArticleById = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
        return res.data.article
    })
    .catch((error) => {
        console.log(error)
    })
}