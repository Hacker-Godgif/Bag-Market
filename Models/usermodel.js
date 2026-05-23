const mongoogse = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProjectDB');


const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    fullname:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:ImageData,
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('user',userSchema);