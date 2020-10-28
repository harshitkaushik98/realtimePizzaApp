const express = require('express')
const app = express() //all functionalities provided by express is used with help of this variable.
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')

//Assets
app.use(express.static('public'))


app.use(expressLayout)

app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/cart',(req,res)=>{
    res.render("customers/cart")
})

app.get('/login',(req,res)=>{
    res.render("auth/login")
})

app.get('/register',(req,res)=>{
    res.render("auth/register")
})


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})