const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    name : String,
    isAdmin : Boolean,
    purchases : [
        {
            type : mongoose.Schema.Types.ObjectId,
            'ref' : 'courseModel'
        }
    ]
})

const courseSchema =  new mongoose.Schema({
    title : String,
    description : String,
    price : Number
})

const userModel =  mongoose.model('users', userSchema)
const courseModel =  mongoose.model('courses', courseSchema)

module.exports = {
    userModel,
    courseModel
}