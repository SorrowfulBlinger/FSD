const {Router} = require('express')
const { authenticatedUserMw } =  require('./../middleware/userMw')
const userDbHandler  = require('./../dbHandlers/userDbHandler')
const userRoute = Router()
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./../config')

userRoute.post('/signup', async (req, res) => {
    try {
        console.log('User signup')
        const email = req.body.email;
        const passwd = req.body.password
        const name = req.body.name
        await userDbHandler.CreateUser(email, passwd, name)
        res.status(201).json({
            "status" : "User signed up"
        })
    } catch(ex) {
        res.status(500).json({
            "status" : "Internal server error"
        })
    }
})

userRoute.post('/signin', async (req, res) => {
    try {
        console.log('User signin')
        const email = req.body.email;
        const passwd = req.body.password
        const name = req.body.name
        const userExists = await userDbHandler.CheckUserExists(email, passwd, name)
        let token = ''
        if(userExists) {
            token =  await jwt.sign({
                name : name,
                isAdmin : false
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

const temPfn = async (req, res) => {
    const result = await userDbHandler.CheckUserExists()
    console.log('user exists called 2')
    res.status(200).json({
        status : 'done'
    })
}

userRoute.get('/courses', async (req, res) => {
    console.log('User is all available courses')
    // userDbHandler.CheckUserExists().then((res, err) => {
    //     console.log('user exists called' + res)
    // })
    // console.log('user exists called 2')
    // res.status(200).json({
    //     status : 'done'
    // })

    temPfn(req,res)
    console.log('3')
})

userRoute.get('/purchased_courses', authenticatedUserMw, async (req, res) => {
    try {
        console.log('User is viewing his purchased courses')
        const result = await userDbHandler.GetPurchasedCourses(req.name)
        console.log(result)
        return res.status(200).json({
            purchases : result
        })
        
    } catch(ex) {
        console.log(ex)
    }
    res.status(500).json({
        "status" : "Internal server error"
    })
    
})

userRoute.post('/purchase/:courseId', authenticatedUserMw, async (req, res) => {
    try {
        console.log(`User is purchasing ${req.params.courseId}`)
        const result = await userDbHandler.PurchaseCourse(req.name, req.params.courseId)
        return res.status(200).json({
            status : "Successfully updated"
        })
        
    } catch(ex) {
        console.log(ex)
    }
    res.status(500).json({
        "status" : "Internal server error"
    })
})

module.exports = { userRoute }