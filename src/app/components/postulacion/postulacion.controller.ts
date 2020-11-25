import { Postulacion } from '../../models/postulacion';
import postulacionRepository from "./postulacion.repository";


async function getPostulacion(): Promise<Postulacion[]>{
  return postulacionRepository.getPostulacion();
}

function addPostulacion(postulacion: Partial<Postulacion>): Promise<Partial<Postulacion>>{
  return postulacionRepository.addPostulacion(postulacion);
}

export default { addPostulacion, getPostulacion };