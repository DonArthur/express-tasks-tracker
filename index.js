const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(helmet)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB Connected')
}).catch(err => console.error(err))

app.get('/greetings', (req, res) => {
    const { name } = req.query
    const { msg } = req.body
    res.json({ message: `Hello ${name}. ${msg}` })
})

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})