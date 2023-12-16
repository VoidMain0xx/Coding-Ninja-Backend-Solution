// Please don't change the pre-written code
// Import the necessary modules here

import { getDB } from "../../config/mongodb.js";

class BucketListRepository {
  async addBucketListItem(bucketListItem) {
    // Write your code here
    try {
      const db =  getDB();
      const collection  = db.collection('bucketListItems');
      await collection.insertOne(bucketListItem); 
    } catch(err){
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }

  async findOneBucketListItem(title) {
    // Write your code here
    try {
      const db =  getDB();
      const collection  = db.collection('bucketListItems');
      await collection.findOne({title}); 
    } catch(err){
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
}

export default BucketListRepository;
