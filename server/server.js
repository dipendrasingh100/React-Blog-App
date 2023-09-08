const express = require("express")
const cors = require("cors")
const pageRoutes = require("./routes/pageRoutes")

const app = express()
app.use(cors({
    origin: "*"
}))

app.use("/", pageRoutes)

const Port = 8000
app.listen(Port, () => {
    console.log(`server is running on http://localhost:${Port}`);
})