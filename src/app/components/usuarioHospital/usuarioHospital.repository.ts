import { DatoUsHosp } from '../../models/usuarioHospital.model';
import listaPostSchema from "./usuarioHospital.schema";

function addlistaPost(listaPost: DatoUsHosp): Promise<DatoUsHosp>{
  return listaPostSchema.create<DatoUsHosp>(listaPost);
}

async function getlistaPost(): Promise<DatoUsHosp[]>{
  return listaPostSchema.find();
}

export default { addlistaPost, getlistaPost };