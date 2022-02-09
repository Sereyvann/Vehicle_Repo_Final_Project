require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))


app.use(express.json())

const vehicleRepoRounter = require('./routes/vehicleRepo')
app.use('/vehicleRepo', vehicleRepoRounter)


app.listen(3000, () => console.log('Server Started'))


