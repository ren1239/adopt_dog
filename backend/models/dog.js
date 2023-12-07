const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
id:String,
name:String,
age:Number,
location:String,
sex:String,
neutered: Boolean,
friendly:Number,
energetic:Number,
trainability:Number,
sociable:Number,
grooming:Number,
picture:String, //This will store a URL
description:String 

})

module.exports = mongoose.model('Dog',dogSchema)