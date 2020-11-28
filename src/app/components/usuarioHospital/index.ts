import express, { Express } from "express";
import router from "./usuarioHospital.network";
const listaPost: Express = express();
listaPost.use('/listaPost', router);

export default listaPost;