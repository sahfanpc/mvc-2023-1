const userModel = require("../models/model");




const Register = async (req, res) => {
    console.log("munna", req.body);
    try {
        const user = await userModel.findOne({ fname: req.body.fname })
        if (user) {
            res.status(420).send("already exist")
        } else {
            const newUser = new userModel({
                fname: req.body.fname,
                lname: req.body.lname
            })
            await newUser.save()
            res.status(212).send("User added successfully")

        }
    }
    catch {
        console.log("Something went wrong");
    }
}
module.exports = { Register }
