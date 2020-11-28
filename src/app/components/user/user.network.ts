import express, { Router, Request, Response} from "express";
import { User } from "../../models/user.model";
import userController from "./user.controller";
import responseModule  from "../../modulos/response.module";


const router: Router = express.Router();

router.get("/login/:email", async (req: Request, res: Response) => {
  let email = req.params.email;
  try {
    const result: User | null = await userController.getUser(email);
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});
router.post("/register", async function (req: Request, res: Response) {
  
  const body: User = req.body;
  try {
    const result: User = await userController.addUser(body);
    responseModule.success(req, res, result);

  } catch (error) {
     responseModule.error(req, res, "Error desconocido")
  }
});

export default router;