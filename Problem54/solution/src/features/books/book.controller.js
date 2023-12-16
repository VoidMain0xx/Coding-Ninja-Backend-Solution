import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => {
        const { title, author, genre, copies, availableCopies } = req.body;
        try {
            const bookdata = { title, author, genre, copies, availableCopies };
            await this.bookRepository.createBook(bookdata);
            res.status(201).send(bookdata);
        } catch (error) {
            console.log(error)
            res.status(500).json({error : "Failed to create a Book" })
        }
    }

    // filtering of book by id
    getOne = async (req, res) => {
        const { bookId } = req.params;
        console.log(bookId);

        try {
            const book = await this.bookRepository.getOne(bookId);
            if (!book) {
                res.status(404).send("book not found.");
            } else {
                res.status(200).send(book);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Failed to find book" });
        }
    };

}


