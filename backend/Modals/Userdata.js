const mongoose = require("mongoose")

const userDataSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    phone: String,
    designation: String,
    gender: String,
    image: String,
})
const userDataModel = mongoose.model("userdata", userDataSchema)

module.exports=userDataModel

