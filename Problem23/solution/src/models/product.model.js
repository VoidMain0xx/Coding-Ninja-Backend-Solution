// Please don't change the pre-written code
// Import the necessary modules here
// import  path  from "path";
// import ProductController from "../controllers/product.controller";
import {products} from "../assets/products.js";


export default class ProductModel {
  // constructor(ID , NAME , DESC , IMAGE , RATING){
  //   this.id = ID;
  //   this.name =  NAME;
  //   this.description = DESC;
  //   this.image = IMAGE;
  //   this.rating = RATING;
  // }

  fetchProducts = () => {
    // Write your code here
    return products 
  };
  
}
