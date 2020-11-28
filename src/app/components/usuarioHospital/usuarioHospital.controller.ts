import { usuarioHospital } from '../../models/usuarioHospital.model';
import usuarioHospitalRepository from "./usuarioHospital.repository";

function addusuarioHospital(usuarioHospital: usuarioHospital): Promise<usuarioHospital>{

  return usuarioHospitalRepository.addusuarioHospital(usuarioHospital);
}
async function getusuarioHospital(): Promise<usuarioHospital[]>{
  return usuarioHospitalRepository.getusuarioHospital();
}



export default { addusuarioHospital, getusuarioHospital };