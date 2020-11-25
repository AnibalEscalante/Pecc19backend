import express, { Express } from "express";
import router from "./situacion.network";

const situacion: Express = express();
situacion.use('/situacion', router);

export default situacion;