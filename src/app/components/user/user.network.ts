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
router.get("/usuarios", async (req: Request, res: Response) =>{
  try {
    const result: User[] | null = await userController.getusuario();
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});

router.get("/id/:id", async (req: Request, res: Response) =>{
  let id = req.params.id;
  try {
    const result: User | null = await userController.getUserById(id);
    responseModule.success(req, res, result);
  } catch (error) {
    responseModule.error(req, res, "Error Desconocido");
  }
});

export default router;