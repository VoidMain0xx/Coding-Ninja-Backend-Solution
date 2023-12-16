// Import the necessary modules here
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    let product = ProductModel.get();
    console.log(product);
    return res.sendFile(path.join(path.resolve() , 'src' , 'views' , 'index.html'));
   
  };
}
