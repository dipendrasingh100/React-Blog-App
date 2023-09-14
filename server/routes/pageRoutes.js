const { home, bollywood, hollywood, fitness, food, technology } = require("../controller/routeController")

const pageRoutes = require("express").Router()

pageRoutes.get("/", home)

module.exports = pageRoutes