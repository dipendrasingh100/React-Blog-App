const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors({
    origin: "*"
}))

const Port = 8000
app.listen(Port, () => {
    console.log(`server is running on http://localhost:${Port}`);
})