import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
console.log('base url: ' , process.env.MONGO_DB);
const baseUrl = process.env.MONGO_DB || '127.0.0.1:27017';
// const url = 'mongodb://127.0.0.1:27017/book'

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/book` , {
            // await mongoose.connect( url , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err); 
    }
}