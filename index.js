const express = require('express')
const path = require('path')
const app = express();

// THESE BOTH LINE USED FOR HANDLE FORM DATA ON BACKEND
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))     //static images, video can be used in project
app.set('view engine', 'ejs') //used to render ejs file as html

// makes route 
app.get('/', (req, res)=>{
    res.render("index")
})

// DYNAMIC ROUTE 
app.get('/profile/:username', (req, res)=>{
// req.params.username --> gives the what you have typed in url
res.send(req.params.username) //send it on frontend
})


// start server on 3000
app.listen(3000, ()=>{
    console.log("server is running");
})



// 1. first install ejs, express and require, express, path, 
// 2. make puplic and views folder 
