const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Please fill all entries" });

  // Check if user with given email already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(409).json({ message: "Username already registered" });
  }

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = await User.create({
      username,
      password: hashedPwd,
    });
    console.log(newUser);

    res.status(201).json({ success: `New user created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
