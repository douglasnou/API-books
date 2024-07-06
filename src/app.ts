import express, { json } from "express";
import { booksRouters } from "./routes/books.routes";
import { HandleErrors } from "./errors/handleError.middlwares";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());
app.use("/books", booksRouters);
app.use(HandleErrors.execute)