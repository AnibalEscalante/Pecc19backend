import express, { Router, Request, Response, response } from "express";
import { usuarioFuncionario } from '../../models/usuarioFuncionario.model';
import usuarioFuncionarioController from "./usuarioFuncionario.controller";
import responseModule  from "../../modulos/response.module";


const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: usuarioFuncionario[] = await usuarioFuncionarioController.getusuarioFuncionario();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: usuarioFuncionario = req.body;
  try {
    const result: usuarioFuncionario = await usuarioFuncionarioController.addusuarioFuncionario(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;