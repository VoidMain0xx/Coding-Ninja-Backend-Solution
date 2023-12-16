import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

const bookModel = mongoose.model('Books' , bookSchema)

export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        try {
            const newBook = new bookModel(bookData)
            return newBook.save();
        } catch (error) {
            console.log(error)
        }
    }

    //filtering the book by id
    async getOne(id) {
        try {
           return await bookModel.findById(id);
        } catch (error) {
            console.log(error);
        }
    }
}