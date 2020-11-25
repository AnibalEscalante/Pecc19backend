import express, { Router, Request, Response }from "express";
import { DatoUsHosp } from '../../models/datoUsuarioHosp.model';
import listaPostController from "./listaPost.controller";
import responseModule from "../../modulos/response.module";



const router: Router = express.Router();


router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: DatoUsHosp[] = await listaPostController.getlistaPost();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: DatoUsHosp = req.body;
  try {
    const result: DatoUsHosp = await listaPostController.addlistaPost(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;