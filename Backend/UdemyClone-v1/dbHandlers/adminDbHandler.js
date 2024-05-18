const mongoose =  require('mongoose')
const { userModel, courseModel } = require('./../dbSchema/user')

const CreateAdmin = async (email, passwd, name) => {
    const result = await userModel.create({
        email : email,
        password : passwd,
        name : name,
        isAdmin : true
    })
    console.log('Admin db insertion ' + result) 
}

const AddCourse = async (title, description, price) => {
    const result =  await courseModel.create({
        title : title,
        description : description,
        price : price
    })
    return result
} 

const CheckAdminExists = async (email, passwd, name) => {
    const result = await userModel.findOne({
        email : email,
        password : passwd,
        name : name,
        isAdmin : true
    })
    return result
    console.log('Admin db insertion ' + result)
}

module.exports = {
    CreateAdmin,
    CheckAdminExists,
    AddCourse
}