import { Router } from "express";
import { createUserController } from "./controllers/user/CreateUserController";
import { validateSchema } from "./midllewares/validateSchema";
import { createUserSchema } from "./schemas/userSchema";
const router = Router();

router.post(
    "/users", 
    validateSchema(createUserSchema),
    new createUserController().handle )  

export { router };  