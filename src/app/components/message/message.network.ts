import express, { Router, Request, Response, response } from "express";
import { Message } from "../../models/message.model";
import messageController from "./message.controller";
import responseModule  from "../../modulos/response.module";




const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: Message[] = await messageController.getMessage();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: Message = req.body;
  try {
    const result: Message = await messageController.addMessage(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;