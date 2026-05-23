const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    
    email:String,
    fullname:{
        type:String,
        minlength:3,
        trim:true
    },
    password:String,
    product:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
    gstin:String,
    
    
})

module.exports = mongoose.model('owner',ownerSchema);