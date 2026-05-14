 import { z } from 'zod';

 export const createUserSchema = z.object({
   body: z.object({
    name:z.string().min(3, {message:" O nome precisa ter no mínimo 3 letras" }),
    email:z.email({message: "Precisa ser um email válido"}),
    password:z.string().min(6, {message: "A senha deve ter no mínimo 6 caractéres"})
   }) 
 })