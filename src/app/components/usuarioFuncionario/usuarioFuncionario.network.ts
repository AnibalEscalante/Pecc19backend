import express, { Router, Request, Response, response } from "express";
import { DatoUsFunc } from '../../models/usuarioFuncionario.model';
import datoUsFuncController from "./usuarioFuncionario.controller";
import responseModule  from "../../modulos/response.module";


const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: DatoUsFunc[] = await datoUsFuncController.getDatoUsFunc();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: DatoUsFunc = req.body;
  try {
    const result: DatoUsFunc = await datoUsFuncController.addDatoUsFunc(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;