import { DatoUsHosp } from '../../models/datoUsuarioHosp.model';
import listaPostRepository from "./listaPost.repository";

function addlistaPost(datoushosp: DatoUsHosp): Promise<DatoUsHosp>{

  return listaPostRepository.addlistaPost(datoushosp);
}
async function getlistaPost(): Promise<DatoUsHosp[]>{
  return listaPostRepository.getlistaPost();
}



export default { addlistaPost, getlistaPost };