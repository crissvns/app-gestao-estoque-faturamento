const express = require("express")
const consign = require("consign")
const cors = require("cors")
const db = require("./db")
const app = express()

app.use(cors())

consign()
    .include("app/controllers")
    .then("app/models")
    .into(app)

app.listen(3000, () => {
    console.log("Server ON")
})
