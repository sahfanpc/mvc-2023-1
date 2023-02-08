const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },


}, { timestamps: true }
)
module.exports = Userdata = mongoose.model("Userdata", userSchema)

