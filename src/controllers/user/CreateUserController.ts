import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService'; 

class createUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body; 
        
        console.log("DADOS RECEBIDOS:", { name, email, password });

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name: name,
            email: email,
            password: password
        });
     res.json({message: user  });    
    }
}

export { createUserController };