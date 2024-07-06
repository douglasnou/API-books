import { booksDatabase, generateId } from "../database/database";
import { IBook, TCreateBook, TUpdatedBook } from "../interfaces/books.interface";

interface IBookServices{
    createBook(body: TCreateBook): IBook;
    getBooks(search?:string): IBook[];
    getOneBook(id:string): IBook;
    deleteBook(id:string): void;
    updateBook(body: TUpdatedBook, id:string): IBook;
}

export class BookServices implements IBookServices{
    createBook(body: TCreateBook): IBook {
      const date = new Date();
      
      const newBook: IBook = {
        id: generateId(),
        name: body.name,
        pages: body.pages,
        category: body.category,
        createdAt: date,
        updatedAt: date,
      };

      booksDatabase.push(newBook);

      return newBook;
    };

    getBooks(search:string): IBook[] {
        const filteredBooks = booksDatabase.filter((book) => {
            const searchRule = search ? book.name.toLowerCase().includes(search.toLowerCase()) : true;
            return searchRule;
        });

        return filteredBooks;
    };

    getOneBook(id: string): IBook {
        const book = booksDatabase.find(book => book.id === Number(id)) as IBook;

        return book;
    };

    deleteBook(id: string): void {
        const index = booksDatabase.findIndex(book => book.id === Number(id));
        booksDatabase.splice(index, 1);
    };

    updateBook(body: Partial<TCreateBook>, id: string): IBook {
        const currentBook = booksDatabase.find(book => book.id === Number(id)) as IBook;
        const date = new Date();

        const newBook = {...currentBook, ...body, updatedAt: date};
        const index = booksDatabase.findIndex(book => book.id === Number(id));
        booksDatabase.splice(index, 1, newBook);

        return newBook;
    };
};