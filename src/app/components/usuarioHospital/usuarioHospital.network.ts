import express, { Router, Request, Response }from "express";
import { usuarioHospital } from '../../models/usuarioHospital.model';
import usuarioHospitalController from "./usuarioHospital.controller";
import responseModule from "../../modulos/response.module";



const router: Router = express.Router();


router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: usuarioHospital[] = await usuarioHospitalController.getusuarioHospital();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: usuarioHospital = req.body;
  try {
    const result: usuarioHospital = await usuarioHospitalController.addusuarioHospital(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;