import { isBook } from './../middlewares/books.middleware';
import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { isValidBook, notSameBook } from "../middlewares/books.middleware";
import { bookSchema, updateBookSchema } from '../schemas/book.schemas';

export const booksRouters = Router();
const booksControllers = new BooksControllers();

booksRouters.post("/", isBook.execute({body:bookSchema}), notSameBook.execute, booksControllers.createBook);
booksRouters.get("/", booksControllers.getBooks);
booksRouters.get("/:id", isValidBook.execute, booksControllers.getOneBook);
booksRouters.patch("/:id",isBook.execute({body:updateBookSchema}), isValidBook.execute, notSameBook.execute, booksControllers.updateBook);
booksRouters.delete("/:id", isValidBook.execute, booksControllers.deleteBook);