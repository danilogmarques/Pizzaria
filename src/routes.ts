import { Router } from "express";
import { createUserController } from "./controllers/user/CreateUserController";
import { validateSchema } from "./midllewares/validateSchema";
import { createUserSchema ,authUserSchema } from "./schemas/userSchema";
import { authUserController } from "./controllers/user/AuthUserController"
const router = Router();

router.post(
    "/users", 
    validateSchema(createUserSchema),
    new createUserController().handle )  

    
    router.post(
        "/session",
        validateSchema(authUserSchema),
        new authUserController().handle
    )
    export { router };  