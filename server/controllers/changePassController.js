const User = require("../models/User");
const bcrypt = require("bcrypt");

const changePassword = async (req, res)=>{
    const {otp, username, password} = req.body;
    const fiveMinsAgo = Date.now() - 300000;

    if (!username){
        res.status(401).json({message:" invalid request"})
    }
    if (!otp){
        res.status(401).json({message:"otp required"})
    }
    const user = await User.findOne({
        username:username,
        otp:otp,
        otp_date: {$gt: fiveMinsAgo}, //expires after 5mins
    }).exec();
    if (!user){
        return res.status(400).json({message:"invalid credentials"})
    }

    const new_passHash = await bcrypt.hash(password, 10);
    user.password = new_passHash;
    user.save();

    // console.log(fiveMinsAgo, timeLimit);
    // console.log(user.username);
    // console.log(user.otp);
    res.status(200).json({
        username:user.username,
        otp:user.otp,
        otp_date: user.otp_date,
        message:"password reset complete",
    });


}

module.exports = {changePassword}