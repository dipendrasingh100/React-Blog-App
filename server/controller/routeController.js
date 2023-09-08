const data = require("../data")

const home = (req, res) => {
    res.send(data)
}

const bollywood = (req, res) => {
    res.send("bollywood")
}

const hollywood = (req, res) => {
    res.send("hollywood")
}

const fitness = (req, res) => {
    res.send("fitness")
}

const food = (req, res) => {
    res.send("food")
}

const technology = (req, res) => {
    res.send("technology")
}

module.exports = { home, bollywood, hollywood, fitness, technology, food }