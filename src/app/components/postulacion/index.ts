import express, { Express } from "express";
import router from "./postulacion.network";

const postulacion: Express = express();
postulacion.use('/postulacion', router);

export default postulacion;