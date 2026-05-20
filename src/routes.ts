import { Router } from "express";
import { createUserController } from "./controllers/user/CreateUserController";
import { validateSchema } from "./midllewares/validateSchema";
import { createUserSchema, authUserSchema } from "./schemas/userSchema";
import { authUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthentificated } from "./midllewares/isAuthentificated"
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

router.post(
    "/users",
    validateSchema(createUserSchema),
    new createUserController().handle
);


router.post(
    "/session",
    validateSchema(authUserSchema),
    new authUserController().handle
);

router.get(
    "/me", 
    isAuthentificated,
    new DetailUserController().handle
);

router.post(
    "/category", 
    isAuthentificated, 
    new CreateCategoryController().handle);
  
export { router };  