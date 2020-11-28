import { usuarioHospital } from '../../models/usuarioHospital.model';
import usuarioHospitalSchema from "./usuarioHospital.schema";

function addusuarioHospital(usuarioHospital: usuarioHospital): Promise<usuarioHospital>{
  return usuarioHospitalSchema.create<usuarioHospital>(usuarioHospital);
}

async function getusuarioHospital(): Promise<usuarioHospital[]>{
  return usuarioHospitalSchema.find();
}

export default { addusuarioHospital, getusuarioHospital };