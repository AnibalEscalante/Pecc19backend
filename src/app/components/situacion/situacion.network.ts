import express, { Router, Request, Response }from "express";
import { RegistroSitHosp } from '../../models/registroSitHosp.model';
import situacionController from "./situacion.controller";
import responseModule from '../../modulos/response.module';


const router: Router = express.Router();

router.get("/:email", async (req: Request, res: Response) => {
  let email = req.params.email;
  try {
    const result: RegistroSitHosp | null = await situacionController.getSituacion(email);
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: RegistroSitHosp = req.body;
  
  try {
    const result: RegistroSitHosp = await situacionController.addSituacion(body);
    responseModule.success(req, res, result, 201);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;