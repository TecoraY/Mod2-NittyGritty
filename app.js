//require express to build an express application
const express= require("express");
//import routers
/*import homepage from './views/Homepage.jsx';
const routes={
    "/":homepage,
    "/product/:id":products
};
const router= ()=>{
    const main=document.getElementById("mainContainer");
    main.innerHTML=homepage.render();
};
window.addEventListener('load', router);*/
//a variable to store express methods 
//create a parser has express.json using app.use
const app= express();

app.use(express.json());
app.set('view engine', 'jsx');
module.exports= app;
//middleware for routes, 
//will need to use routes defined above to define the route here

//export


