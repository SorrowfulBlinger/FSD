const pg = require('pg')
const express = require('express')
const app = express();
//const {DB_PASSWORD,  DB_USERNAME} = require('./dbconfig')
let pgclient = null

app.use(express.json())

async function SetupDb() { 
    const DB_USERNAME = 'admin'
    const DB_PASSWORD = 'rYjf9nRgFUCpcoXIuxobUJczck_BFe'
    const dbUrl = `postgresql://${DB_USERNAME}:${DB_PASSWORD}@us-east-1.dc276943-80cc-4c83-af98-492b0073f856.aws.ybdb.io:5433/ yugabyte?`
    pgclient = new pg.Client(dbUrl)
    await pgclient.connect()
}


app.get('/test',async (req,res) => {
    await pgclient.query('CREATE TALE users ( id SERIAL PRIMARY KEY, name VARCHAR(255))')
    res.status(200).json({
        'status' : 'success'
    })
})
SetupDb()
app.listen(3000)