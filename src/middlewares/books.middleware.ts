import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";
import { IRequestSchemas } from "../interfaces/books.interface";

export class isValidBook{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!booksDatabase.some(book => book.id === Number(req.params.id))){
            throw new AppError(404, "Book not found.");
        };
        return next();
    };

};

export class notSameBook{
    static execute(req: Request, res: Response, next: NextFunction){
        if(booksDatabase.some(book => book.name === req.body.name)){
            throw new AppError(409, "Book already registered.");
        };
        return next();
    };
};

export class isBook{
    static execute(schemas: IRequestSchemas){
        return async(req: Request, res: Response, next: NextFunction)=>{
            try {
                if(schemas.params){
                    req.params = await schemas.params.parseAsync(req.params);
                };

                if(schemas.body){
                    req.body = await schemas.body.parseAsync(req.body);
                };

                if(schemas.query){
                    req.query = await schemas.query.parseAsync(req.query);
                }
                next();
            } catch (error) {
                if(error instanceof ZodError){
                    return res.status(409).json(error);
                };
            };
        };
    };

};