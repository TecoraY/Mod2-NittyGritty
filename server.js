//listen to server here and require mongoose
const mongoose=require('mongoose');
const express=require('express');
const products=require('./data');
//const dotenv=require('dotenv');
/*dotenv.config({
    path:"./config.env",
});
console.log(process.env);*/

const port=5500;
const app=require('./app');

app.get('/products', function (request,response){
    response.render('Homepage')
});
//define datebase here once its created, asynchronously
//connect to database


//listen to port
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});