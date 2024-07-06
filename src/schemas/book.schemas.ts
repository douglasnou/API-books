import { z } from "zod";

export const bookSchema = z.object({
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
});

export const updateBookSchema = bookSchema.partial();