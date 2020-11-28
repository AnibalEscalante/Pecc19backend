import express, { Express } from "express";
import router from "./usuarioHospital.network";
const usuarioHospital: Express = express();
usuarioHospital.use('/hospital', router);

export default usuarioHospital;