const data = require("../data")

const home = (req, res) => {
    res.send(data)
}

module.exports = { home }