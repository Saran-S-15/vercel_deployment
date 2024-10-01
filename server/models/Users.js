const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Phone_Number: Number,
    Email_Address:String,
    Password:String,
    Confirm_Password:String
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = { UserModel };