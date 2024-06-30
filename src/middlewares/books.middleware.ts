import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/appError";

export class isValidBook{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!booksDatabase.some(book => book.id === Number(req.params.id))){
            throw new AppError(404, "Book not found.")
        }
        return next();
    };

}

export class notSameBook{
    static execute(req: Request, res: Response, next: NextFunction){
        if(booksDatabase.some(book => book.name === req.body.name)){
            throw new AppError(409, "Book already registered.")
        }
        return next();
    }
}