
// SERVIDOR
const express = require('express')
const server = express()

const  {
    pageLanding,
    pageStudy,
    pageTeach
} = require('./pages')

const nunjucks = require('nunjucks')

// config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// INICIO E CONFIG DO SERVIDOR

// configure static files (css, scripts, images)
server.use(express.static("public"))
// app routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/teach", pageTeach)
// START SERVER
.listen(5000)