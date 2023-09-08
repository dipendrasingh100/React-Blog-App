const { home, bollywood, hollywood, fitness, food, technology } = require("../controller/routeController")

const pageRoutes = require("express").Router()

pageRoutes.get("", home)
pageRoutes.get("/bollywood", bollywood)
pageRoutes.get("/hollywood", hollywood)
pageRoutes.get("/fitness", fitness)
pageRoutes.get("/food", food)
pageRoutes.get("/technology", technology)

module.exports = pageRoutes