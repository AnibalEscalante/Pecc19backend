import express, { Express } from "express";
import router from "./usuarioFuncionario.network";

const usuarioFuncionario: Express = express();
usuarioFuncionario.use('/funcionarios', router);

export default usuarioFuncionario;