import { RegistroSitHosp } from '../../models/registroSitHosp.model';
import situacionRepository from "./situacion.repository";


function getSituacion(email: string){
  return situacionRepository.getSituacion(email);
}

function addSituacion(registroSitHosp: RegistroSitHosp): Promise<RegistroSitHosp>{
  return situacionRepository.addSituacion(registroSitHosp);
}

export default { addSituacion, getSituacion };

