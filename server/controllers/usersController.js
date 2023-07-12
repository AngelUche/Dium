const User = require("../models/User");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { fname, lname, email, userName, address, password } = req.body;
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // checking if user exist in db
    old_user = await User.findOne({ email });
    if (old_user) {
        return res.status(400).json({ error: "Email already exists" });
    }


    try {
        const newUser = await User.create({
            fname,
            lname,
            email,
            userName,
            address,
            password: hashedPassword,
        });
        // adding the jwt token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    //adding the token to the header
        res.setHeader('Authorization','Bearer' + token)
        res.send({ message: "User registered successfully!" });
        console.log(newUser);
    }
    catch (error) {
        res.send({ message: "An error occured. Please try again later" });
        console.log(error);
    }

    
};

// exporting the functions
module.exports = {
    registerUser,}