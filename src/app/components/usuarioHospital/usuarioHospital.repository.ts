import { usuarioHospital } from '../../models/usuarioHospital.model';
import usuarioHospitalSchema from "./usuarioHospital.schema";

function addusuarioHospital(usuarioHospital: usuarioHospital): Promise<usuarioHospital>{
  return usuarioHospitalSchema.create<usuarioHospital>(usuarioHospital);
}

async function getusuarioHospital(): Promise<usuarioHospital[] | null>{
  return usuarioHospitalSchema.find({
    promocionUsuario: true
    });
}

function getusuarioHospitalById(id: string){
    return usuarioHospitalSchema.findById(id);
}


export default { addusuarioHospital, getusuarioHospital, getusuarioHospitalById };