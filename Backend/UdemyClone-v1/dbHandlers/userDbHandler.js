const mongoose =  require('mongoose')
const { userModel, courseModel } = require('./../dbSchema/user')

const CreateUser = async (email, passwd, name) => {
    const result = await userModel.create({
        email : email,
        password : passwd,
        name : name,
        isAdmin : false
    })
    console.log('User db insertion ' + result) 
}

const GetPurchasedCourses = async (username) => {
    const user = await userModel.findOne({
        name : username
    })
    if(user) {
        return await courseModel.find({
            _id : {
                $in : user.purchases
            }
        })
    }
    else {
        return []
    }
}

const PurchaseCourse = async (userName, courseId) => {
    let result 
    const course =  await courseModel.find({
        _id : courseId
    })
    if (course) {
        result = await userModel.updateOne({
            name : userName
        },
        { $push : { purchases : course } })
    }
    return result
} 

const CheckUserExists = async (email, passwd, name) => {
    const result = await userModel.findOne({
        email : email,
        password : passwd,
        name : name,
        isAdmin : false
    })
    console.log('1')
    return result
}

module.exports = {
    CreateUser,
    CheckUserExists,
    PurchaseCourse,
    GetPurchasedCourses
}