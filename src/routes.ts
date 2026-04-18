import { Router } from "express";
import { createUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get("/users", new createUserController().handle )  

export { router }; 