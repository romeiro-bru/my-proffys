
// SERVIDOR
const express = require('express')
const server = express()

const  {
    pageLanding,
    pageStudy,
    pageTeach,
    saveClasses
} = require('./pages')

const nunjucks = require('nunjucks')

// config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// INICIO E CONFIG DO SERVIDOR
server
// receber dados do body
.use(express.urlencoded({ extended: true }))
// configure static files (css, scripts, images)
.use(express.static("public"))
// app routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/teach", pageTeach)
.post("/save-classes", saveClasses)
// START SERVER
.listen(5000)