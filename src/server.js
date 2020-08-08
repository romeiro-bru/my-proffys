// DADOS
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "21 984349525",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "R$ 20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Nami Meyer",
        avatar: "https://avatars0.githubusercontent.com/u/56081906?s=460&u=3ec07f792b3fa690983bec21ef934a81edc67ecb&v=4",
        whatsapp: "21 984349525",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Biologia",
        cost: "R$ 30,00",
        weekday: [1],
        time_from: [820],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
]
// FUNCIONALIDADES
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageTeach (req, res) {
    return res.render("teach.html", { subjects, weekdays })
}

// SERVIDOR
const express = require('express')
const server = express()
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