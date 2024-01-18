const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/node/", (req, res) => {
    return res.json({ message: "ceci est message de node js for black kube" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server listenning on port ${process.env.PORT}`)
})
