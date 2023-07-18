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