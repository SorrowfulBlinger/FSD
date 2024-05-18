const express = require('express')
const mongoose =  require('mongoose')
const jwt = require('jsonwebtoken')
const bodyParser =  require('body-parser')
const { adminRoute } = require('./routes/admin')
const { userRoute } = require('./routes/user')
const { DB_UNAME, DB_PASS, DB_NAME } = require('./config')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// Connect to DB

//mongodb+srv://admin:admin123@cluster0.dognfp2.mongodb.net/
const dbUrl = `mongodb+srv://${DB_UNAME}:${DB_PASS}@cluster0.dognfp2.mongodb.net/${DB_NAME}`
console.log(dbUrl)
mongoose.connect(dbUrl)

app.use('/admin', adminRoute)
app.use('/user', userRoute)
app.listen(3000)
