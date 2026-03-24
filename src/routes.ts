import { Router, Request, Response } from "express";
import { createUserController } from "./controllers/users/CreateUserController";
import { validateSchema } from "./middlewares/validateSchema";
import { createUserSchema } from "./schemas/userSchema";

const router = Router();

router.post("/users", validateSchema(createUserSchema),new createUserController().handle);   

export { router }; 