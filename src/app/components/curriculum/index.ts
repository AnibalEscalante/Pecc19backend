import express, { Express } from "express";
import router from "./curriculum.network";

const curriculum: Express = express();
curriculum.use('/curriculum', router);

export default curriculum;