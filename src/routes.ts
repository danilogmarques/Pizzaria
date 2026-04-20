import { Router } from "express";
<<<<<<< Updated upstream
import { createUserController } from "./controllers/user/CreateUserController";
=======
import { createUserController } from "./controllers/users/CreateUserController";
import { validateSchema } from "./middlewares/validateSchema";
import { createUserSchema } from "./schemas/userSchema";
>>>>>>> Stashed changes

const router = Router();

router.get("/users", new createUserController().handle )  

export { router }; 