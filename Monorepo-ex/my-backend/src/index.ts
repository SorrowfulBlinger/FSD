import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}))

app.use(cookieParser())

app.get('/data',  (req, res) => {
    let r = (Math.random() + 1).toString(36).substring(7);
    res.cookie('auth-jwt', 'secret-3002')
    return res.json({
        'status':r
    }).status(200)
})

app.listen(3002)