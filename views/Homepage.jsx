const React=require('react');
class Homepage extends React.Component{
    render(){
        const products=require('../data');
    
        return( 
    <>
    <ul class="products">
        ${products.map(
            (product) =>{
                return(
        <li>
            <a  href="/#/products/${product._id}">
                <img id="wm1"src="${product.image}" alt="${product.name}"/>
            </a>
            <h1>
            ${product.name}
            </h1>
            <h1 class="productDesc">
            ${product.brand}
            </h1>
            <h1 class="price">
            ${product.price}
            </h1>
            <button class="btnAddCart"> Add To Cart </button>
        </li>
                )
                })}
    </ul>
    </>
        );
    }
}        