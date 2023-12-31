require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const verifyJWT = require("./middleware/verifyJWT");
const jsonErr = require("./middleware/json_error_handler");
const PORT = process.env.PORT || 3500;

connectDB();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());
// middleware to ensure server dont crash cause of json syntax error
app.use(jsonErr);


//middleware for cookies
app.use(cookieParser());

// Routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));
app.use("/reset", require("./routes/forgotenpass"));
app.use("/newpass", require("./routes/passwordReset"));
app.use("/logout", require("./routes/logout"));
app.use(verifyJWT);
app.use("/cart", require("./routes/carts"));
// app.use("/category", require("./routes/category"));
app.use("/products", require("./routes/products"));
app.use("/orders", require("./routes/orders"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
