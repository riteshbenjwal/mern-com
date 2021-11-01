const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send("Hello world"));

app.get('/sign-in', (req,res) => res.send("Sign in page"));

app.get('/sign-up', (req,res)=> res.send("Sign-up Page"))


const admin = (req,res) => {
    return res.send("This is Admin Page");
 }

const isAdmin = (req,res, next) => {
    console.log("isAdmin is running");
    next();
}

const isLoggedIn = (req,res, next) => {
    console.log("isLogged in running");
    next();
}
app.get("/admin", isAdmin, admin)

app.listen(port, () => console.log(`Example app listening on port ${port}`));                  