const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    Name:String,
    Email:String,
    Gender:String,
    Contact:Number,
    Password:String

});

module.exports = mongoose.model("Signup", userSchema);