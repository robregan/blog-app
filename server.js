const express = require('express');
const app = express();
const articleRouter = require('./routes/articles')
const connectDB = require('./config/database')
const PORT = 2121
require("dotenv").config({ path: "./config/.env" });

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)


connectDB()

app.get('/', (req, res) => {
    const articles = [{
        title: 'test article',
        createdAt: new Date(),
        description: 'test desc'
    }]
    res.render('articles/index', { articles: articles })
})

app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)})