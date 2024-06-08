import express from 'express'
const app = express()

app.get('/data',  (req, res) => {
    let r = (Math.random() + 1).toString(36).substring(7);
    return res.json({
        'status':r
    }).status(200)
})
app.listen(3002)