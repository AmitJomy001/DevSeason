const express = require('express');
const app = express();
const {DBConnection} = require('./database/db');
DBConnection();
const {User} = require('./models/user');

//all GET methods go below here
app.get('/', (req,res)=> {
    res.send("Hello world");
})
app.get('/thisRoute', (req,res)=> {
    res.send("welcome to this route  ");
})

//all POST methods go below here

app.post('/register',async (req,res)=> {
    //get the data
    const {firstname,lastname,email,password} = req.body;
    //check if the data received is empty or not
    if(!(firstname && lastname && email && password)){
         return res.status(400).send("Please enter all fields")
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).send("User already exists with the same email");
    }

    res.send("<h1>Hello there this is an h1 tag</h1>  ");
})







app.listen(5000, () => {
    console.log("Server listening on prot 5000");
})