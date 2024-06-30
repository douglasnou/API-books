import express, { json } from "express";
import { booksRouters } from "./routes/books.routes";
import { HandleErrors } from "./errors/handleError.middlwares";

export const app = express();

app.use(json());
app.use("/books", booksRouters);
app.use(HandleErrors.execute)