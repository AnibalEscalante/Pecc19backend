import { DatoUsHosp } from '../../models/datoUsuarioHosp.model';
import listaPostSchema from "./listaPost.schema";

function addlistaPost(listaPost: DatoUsHosp): Promise<DatoUsHosp>{
  return listaPostSchema.create<DatoUsHosp>(listaPost);
}

async function getlistaPost(): Promise<DatoUsHosp[]>{
  return listaPostSchema.find();
}

export default { addlistaPost, getlistaPost };