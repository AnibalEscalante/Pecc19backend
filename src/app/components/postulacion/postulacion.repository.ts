import { Postulacion } from '../../models/postulacion';
import postulacionSchema from "./postulacion.schema";

function addPostulacion(postulacion: Partial<Postulacion>): Promise<Partial<Postulacion>>{
  return postulacionSchema.create<Partial<Postulacion>>(postulacion);
}

async function getPostulacion(): Promise<Postulacion[]>{
  return postulacionSchema.find();
}

export default { addPostulacion, getPostulacion };