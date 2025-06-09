const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();
const { DBConnection } = require("./database/db");
DBConnection();
const User  = require("./models/user");

//middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//all GET methods go below here
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/thisRoute", (req, res) => {
  res.send("welcome to this route  ");
});

//all POST methods go below here

app.post("/register", async (req, res) => {
  try {
    //get the data
    const { firstname, lastname, email, password } = req.body;
    //check if the data received is empty or not
    if (!(firstname && lastname && email && password)) {
      return res.status(400).send("Please enter all fields");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists with the same email");
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //save the user to the database
    //first create the user model
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    user.token = token;
    user.password = undefined;
    res
      .status(200)
      .json({ message: "You have succesfully registered the user: ", user });
  } catch (error) {
    console.log("error occured trying to register: ", error);
  }
});

app.listen(5000, () => {
  console.log("Server listening on prot 5000");
});
