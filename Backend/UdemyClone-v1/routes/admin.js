const { Router } = require('express')
const { authenticatedAdminMw } = require('./../middleware/userMw')
const jwt =  require('jsonwebtoken')
const adminDbHandler = require('./../dbHandlers/adminDbHandler')
const adminRoute = Router()
const { JWT_SECRET } = require('./../config')
const { courseModel } = require('../dbSchema/user')

adminRoute.post('/course', authenticatedAdminMw, async (req, res) => {
    try {
        console.log('Admin is adding a course')
        const result = await adminDbHandler.AddCourse(req.body.title, req.body.description, req.body.price)
        console.log(result)
        return res.status(201).json({
            status : 'Course Added',
            course : result
        })
    } catch(ex) {
        console.log(ex)
        res.status(500).json({
            "status" : "Internal server error"
        })
    }
})

adminRoute.post('/signup', async (req, res) => {
    try {
        console.log('Admin signup')
        const email = req.body.email;
        const passwd = req.body.password
        const name = req.body.name
        await adminDbHandler.CreateAdmin(email, passwd, name)
        res.status(201).json({
            "status" : "Admin signed up"
        })
    } catch(ex) {
        res.status(500).json({
            "status" : "Internal server error"
        })
    }
})

adminRoute.post('/signin', async (req, res) => {
    try {
        console.log('Admin signin')
        const email = req.body.email;
        const passwd = req.body.password
        const name = req.body.name
        const adminExists = await adminDbHandler.CheckAdminExists(email, passwd, name)
        let token = ''
        if(adminExists) {
            token =  await jwt.sign({
                name : name,
                isAdmin : true
            }, JWT_SECRET)
        }
        res.status(200).json({
            "token" : token
        })
    } catch(ex) {
        console.log(ex)
        res.status(500).json({
            "status" : "Internal server error"
        })
    }
})

module.exports = { adminRoute }



