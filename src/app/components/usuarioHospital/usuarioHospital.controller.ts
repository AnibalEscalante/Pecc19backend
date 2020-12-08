import { usuarioHospital } from '../../models/usuarioHospital.model';
import usuarioHospitalRepository from "./usuarioHospital.repository";

function addusuarioHospital(usuarioHospital: usuarioHospital): Promise<usuarioHospital>{

  return usuarioHospitalRepository.addusuarioHospital(usuarioHospital);
}
function getusuarioHospital(): Promise<usuarioHospital[] | null>{
  return usuarioHospitalRepository.getusuarioHospital();
}

function getusuarioHospitalById(id: string){
    return usuarioHospitalRepository.getusuarioHospitalById(id)
}


export default { addusuarioHospital, getusuarioHospital, getusuarioHospitalById };