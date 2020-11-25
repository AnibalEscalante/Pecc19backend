import express, { Router, Request, Response, response } from "express";
import { Curriculum } from "../../models/curriculum.model";
import curriculumController from "./curriculum.controller";
import responseModule  from "../../modulos/response.module";


const router: Router = express.Router();

router.get("/all", async (req: Request, res: Response) =>{
  try {
    const result: Curriculum[] = await curriculumController.getCurriculum();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/add", async function (req: Request, res: Response) {
  
  const body: Curriculum = req.body;
  try {
    const result: Curriculum = await curriculumController.addCurriculum(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;