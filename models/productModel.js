//schema for a product on its own page
const mongoose= require("mongoose"); //for database


//
const productSchema= new mongoose.Schema({
    productID:{
        type: String,
    },
    productName:{
        type: String,
    },
    productPrice:{
        type: Number,
    },
    ProductDescript:{
        type: String,
    },

});
/*const productPage={
    render:()=>{
        
    }
}*/
const Product= mongoose.model("Product", productSchema);

module.exports=Product;