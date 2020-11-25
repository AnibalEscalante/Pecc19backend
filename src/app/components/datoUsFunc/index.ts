import express, { Express } from "express";
import router from "./datoUsFunc.network";

const datoUsFunc: Express = express();
datoUsFunc.use('/funcionarios', router);

export default datoUsFunc;