import { Express } from "express";
import usuarioHospital from "./usuarioHospital";
import message from "./message"
import postulacion from "./postulacion";
import situacion from "./situacion";
import curriculum from "./curriculum";
import usuarioFuncionario from "./usuarioFuncionario";
const components: Express[] = [
   message,
   usuarioHospital,
   postulacion,
   situacion,
   curriculum,
   usuarioFuncionario
];

export default components;