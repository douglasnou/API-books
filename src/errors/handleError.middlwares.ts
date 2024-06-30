import { NextFunction, Request, Response } from "express";
import { AppError } from "./appError";

export class HandleErrors{
    static execute(err: Error, req: Request, res: Response, next: NextFunction){
        if(err instanceof AppError){
            res.status(err.statusCode).json({error: err.message});
        } else {
            console.log(err)
            return res.status(505).json({message: "internal server error!"})
        }
        next()
    }
}