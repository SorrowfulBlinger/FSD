import { Client } from "pg";
import express  from "express";
import {DB_PASSWORD,  DB_USERNAME} from "./dbconfig/index"
import { addUser, setUpPrismaDB } from "./prisma/userModel";

let pgclient:Client;
const app = express();
app.use(express.json())

async function SetupDb() { 
    const dbUrl = `postgresql://${DB_USERNAME}:${DB_PASSWORD}@us-east-1.dc276943-80cc-4c83-af98-492b0073f856.aws.ybdb.io:5433/yugabyte?
    ssl=true&sslmode=verify-full&sslrootcert=root.crt`
    pgclient = new Client(dbUrl)
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

app.get('/testP/:param',async (req,res) : Promise<any> => {
    const user = await addUser({
        name : req.params.param,
        email: req.params.param+ '@gmail.com'
    })
    res.json({
        status : 'Success',
        userId : user.userId
    }).status(201)
})

//SetupDb()
setUpPrismaDB();
app.listen(3000);