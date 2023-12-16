// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jodId : [{
    type : mongoose.Schema.Types.ObjectId,
    require : true,
    ref: 'job'
  }], 
  userID: [{
    type :  mongoose.Schema.Types.ObjectId,
    require : true,
    ref : 'User'
  }]
});
