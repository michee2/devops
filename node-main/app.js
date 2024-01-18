const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/node/", (req, res) => {
    return res.json({ message: "Projet avec AHO_NCHO_YAO" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server listenning on port ${process.env.PORT}`)
})
