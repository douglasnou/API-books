import { AnyZodObject } from "zod";

export interface IBook{
    id: number;
    name: string;
    pages: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
}

export type TCreateBook = Omit<IBook, "id" | "createdAt" | "updatedAt">;
export type TUpdatedBook = Partial<TCreateBook>;

export interface IRequestSchemas{
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}