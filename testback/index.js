const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send("Hello world"));

app.get('/sign-in', (req,res) => res.send("Sign in page"));

app.get('/sign-up', (req,res)=> res.send("Sign-up Page"))

app.listen(port, () => console.log(`Example app listening on port ${port}`));                  