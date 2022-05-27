//listen to server here and require mongoose
const mongoose=require('mongoose')
//const dotenv=require('dotenv');
/*dotenv.config({
    path:"./config.env",
});
console.log(process.env);*/

const port=3000;
const app=require('./app');

//define datebase here once its created, asynchronously
//connect to database


//listen to port
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});