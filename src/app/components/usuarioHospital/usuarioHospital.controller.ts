import { DatoUsHosp } from '../../models/usuarioHospital.model';
import listaPostRepository from "./usuarioHospital.repository";

function addlistaPost(datoushosp: DatoUsHosp): Promise<DatoUsHosp>{

  return listaPostRepository.addlistaPost(datoushosp);
}
async function getlistaPost(): Promise<DatoUsHosp[]>{
  return listaPostRepository.getlistaPost();
}



export default { addlistaPost, getlistaPost };