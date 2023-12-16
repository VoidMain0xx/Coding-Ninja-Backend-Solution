// make necessary imports here
import mongoose from "mongoose"
// write your code here
export const reviewSchema = new mongoose.Schema({
    // Write your code here
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    // Reference to the book this review is associated with
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Refers to the 'Book' model
    },
    
})