
import { RegistroSitHosp } from '../../models/registroSitHosp.model';
import situacionSchema from "./situacion.schema";

function addSituacion(RegistroSitHosp: RegistroSitHosp ): Promise<RegistroSitHosp>{
  return situacionSchema.create<RegistroSitHosp>(RegistroSitHosp);
}

async function getSituacion(email: string){
  return situacionSchema.findOne({ email: email });
}

export default { addSituacion, getSituacion };
