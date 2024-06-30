import { Request, Response } from "express";
import { BookServices } from "../services/books.services";

interface IBooksControllers{
    createBook(req: Request, res: Response): Response;
    getBooks(req: Request, res: Response): Response;
    getOneBook(req: Request, res: Response): Response;
    deleteBook(req: Request, res: Response): Response;
    updateBook(req: Request, res: Response): Response;
};

export class BooksControllers implements IBooksControllers{
    createBook(req: Request, res: Response): Response{
        const bookServices = new BookServices();
        const createBook = bookServices.createBook(req.body);
        return res.status(201).json(createBook);
    };

    getBooks(req: Request, res: Response): Response{
        const bookServices = new BookServices();
        const getBooks = bookServices.getBooks();

        return res.status(200).json(getBooks);
    };

    getOneBook(req: Request, res: Response): Response{
        const bookServices = new BookServices();
        const getOneBook = bookServices.getOneBook(req.params.id);

        return res.status(200).json(getOneBook);
    };

    deleteBook(req: Request, res: Response): Response{
        const bookServices = new BookServices();
        const deleteBook = bookServices.deleteBook(req.params.id);

        return res.status(204).json();
    };

    updateBook(req: Request, res: Response): Response{
        const bookServices = new BookServices();
        const updateBook = bookServices.updateBook(req.body, req.params.id);

        return res.status(200).json(updateBook);
    };
};