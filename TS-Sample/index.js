const pg = require('pg')
const express = require('express')
const app = express();
const {DB_PASSWORD,  DB_USERNAME} = require('./dbconfig')
let pgclient = null

app.use(express.json())

async function SetupDb() { 
    const dbUrl = `postgresql://${DB_USERNAME}:${DB_PASSWORD}@us-east-1.dc276943-80cc-4c83-af98-492b0073f856.aws.ybdb.io:5433/yugabyte?
    ssl=true&sslmode=verify-full&sslrootcert=root.crt`
    pgclient = new pg.Client(dbUrl)
    await pgclient.connect()
    console.log('connection success to ' + dbUrl)
}

app.get('/test/:param',async (req,res) => {
    await pgclient.query('CREATE TABLE  IF NOT EXISTS users ( id SERIAL PRIMARY KEY, name VARCHAR(255))')
    const param =  req.params.param;
    await pgclient.query('INSERT INTO users(name) VALUES($1)',[param])
    res.status(200).json({
        'status' : 'success'
    })

})

SetupDb()
app.listen(3000)