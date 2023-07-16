const User = require("../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

const sendOTP = (username, email) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    // create transport for nodemailer
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.MY_EMAIL,
            pass: process.env.MY_EMAIL_PASS,
        },
    });

    const mail_config = {
        from: process.env.MY_EMAIL,
        to: email,
        subject: "DIUM password RESET",
        html: `<!DOCTYPE html>
        <html>
          <head>
            <title> DIUM OTP Email</title>
          </head>
          <body>
            <h2 style="align-text:center; background:fff"> here is your otp. Do not share this code</h2>
            <h1>Your OTP is: ${otp}</h1>
          </body>
        </html>
        `
    };
    transport.sendMail(mail_config, (err, result) =>{
        if (err){
            console.log("error sending otp", err);
            return;
        }
        console.log('Email sent successfully', result.response);
        
    });
    return (otp);
};

const forgotPass = async (req, res)=>{
    const {username, email } = req.body;
    const user = await User.findOne({username}).exec();
    if (!user){
        return res.status(401).json('username does not exist');
    }
    const otp = sendOTP(username, email);
    if (!otp){
        return res.status(500).json('Error sending OTP, try again later');
    }
    const timestamp = Date.now();
    user.otp = otp;
    user.otp_date = timestamp;
    user.save();

    res.status(226).json({
        message:'OTP sent successfully',
        otp: user.otp,
        otp_expr: user.otp_date,
    });
}

module.exports = { forgotPass };