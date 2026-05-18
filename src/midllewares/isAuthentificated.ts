import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface Payload {
    sub: string
};

export function isAuthentificated (
    req: Request,
    res: Response,
    next: NextFunction
){
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            error: "Token não fornecido",
        });
    }
    
    const [,token] = authToken.split(" ")
    console.log("Token ", token);

    try{
      const { sub } = verify(token!, process.env.JWT_SECRET as string ) as Payload;

      req.user_id = sub;

      return next(); 

    }catch(error){
      res.status(401).json({
      error: "Token invalido"   
    })
    }

}

