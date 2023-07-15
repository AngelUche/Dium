const User = require("../models/User");

//tested
const logout = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.jwt) {
        return res.status(204).json({ message: "You are not logged in" });
    }
    const refreshToken = cookie.jwt;
    try {
        const foundUser = await User.findOne({refreshToken}).exec()
        // if no found user then return 204 and clear cookies
        if (!foundUser) {
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            return res.sendStatus(204);
        }
        // if found user then clear refresh token and clear cookies
        foundUser.refreshToken = "";
        result = await foundUser.save();
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        console.log(result);
        res.status(200).json({ message: "You have been logged out" }); // 204 ok no content
    } catch (error) {
        res.status(400).json({ message: "An error occurred. Please try again later" });
        console.log(error);
    }
}

module.exports =  {logout};