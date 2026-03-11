import cors from "cors";
import express, { } from "express";
import "dotenv/config";

const app= express();

app.use(express);
app.use(cors());

const PORT = process.env.PORT! || 3333;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta" + PORT)
});



