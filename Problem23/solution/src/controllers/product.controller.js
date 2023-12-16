// Please don't change the pre-written code
// Import the necessary modules here
import path from 'path';
import ProductModel from '../models/product.model.js';


let products = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    let product = products.fetchProducts();
     return res.render('product', {Product : product});
  };
}
