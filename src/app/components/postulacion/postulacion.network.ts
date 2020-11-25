import express, { Router, Request, Response }from "express";
import { Postulacion } from '../../models/postulacion';
import postulacionController from "./postulacion.controller";
import responseModule from '../../modulos/response.module';


const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: Postulacion[] = await postulacionController.getPostulacion();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: Partial<Postulacion> = req.body;
  console.log(req)
  try {
    const result: Partial<Postulacion> = await postulacionController.addPostulacion(body);
    responseModule.success(req, res, result);

  } catch (error) {
    //console.log(error);
    responseModule.error(req, res, "Error desconocido")
    
  }
});

export default router;