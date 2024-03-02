const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type:String, unique:true},
})

const Users = mongoose.model('Users', userSchema, 'users')

const mySchemas = {'Users': Users}

module.exports = mySchemas