// this file will store our to-do mongoose schema. it will also connect to the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating new item schema
const itemSchema = new Schema({
    item: String,
})

// creating model from schema
const Item = mongoose.model('Item', itemSchema)

// create user schema
const userSchema = new Schema({
    username: String,
    password: String
})

// create 
const User = mongoose.model('User', userSchema)

// export models
module.exports = Item;