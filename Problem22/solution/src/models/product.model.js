// Import the necessary modules here
import path from 'path'
import { products } from '../assets/products.js';

export default class ProductModel {
  fetchProducts = (_id , _title , _price , _description , _category, _image , _rating) => {
    // Write your code here
    this.id = _id;
    this.title = _tittle;
    this.price = _price;
    this.description = _description;
    this.category = _category;
    this.image = _image;
    this.rating = _rating;
  };


  static get(){
    return products;
  }
}
 

// var products = path.join(path.resolve(),  'src' , 'assets' , 'products.js')