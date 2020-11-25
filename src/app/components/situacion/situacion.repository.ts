import situacion from '.';
import { RegistroSitHosp } from '../../models/registroSitHosp.model';
import situacionSchema from "./situacion.schema";

function addSituacion(RegistroSitHosp: RegistroSitHosp ): Promise<RegistroSitHosp>{
  return situacionSchema.create<RegistroSitHosp>(RegistroSitHosp);
}

async function getSituacion(): Promise<RegistroSitHosp[]>{
  return situacionSchema.find();
}

export default { addSituacion, getSituacion };