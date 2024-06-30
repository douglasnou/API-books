import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { isValidBook, notSameBook } from "../middlewares/books.middleware";

export const booksRouters = Router();
const booksControllers = new BooksControllers();

booksRouters.post("/", notSameBook.execute, booksControllers.createBook);
booksRouters.get("/", booksControllers.getBooks);
booksRouters.get("/:id", isValidBook.execute, booksControllers.getOneBook);
booksRouters.patch("/:id", isValidBook.execute, notSameBook.execute, booksControllers.updateBook);
booksRouters.delete("/:id", isValidBook.execute, booksControllers.deleteBook);