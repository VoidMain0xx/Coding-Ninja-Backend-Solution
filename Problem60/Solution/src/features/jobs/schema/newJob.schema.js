// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  // Write your code here
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description : {
    type: String ,
    require: true
  },
  company :{
    type: String,
    require: true
  },
  salary : {
    type :Number,
    require: true
  },
  applicants : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }]  
 
});

