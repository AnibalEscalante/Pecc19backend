import { Express } from "express";
import listaPost from "./listaPost";
import message from "./message"
import postulacion from "./postulacion";
import situacion from "./situacion";
import datoUsFunc from "./datoUsFunc";
import curriculum from "./curriculum"
const components: Express[] = [
   message,
   listaPost,
   postulacion,
   situacion,
   datoUsFunc,
   curriculum
];

export default components;