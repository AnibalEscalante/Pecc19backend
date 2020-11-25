import { RegistroSitHosp } from '../../models/registroSitHosp.model';
import situacionRepository from "./situacion.repository";


async function getSituacion(): Promise<RegistroSitHosp[]>{
  return situacionRepository.getSituacion();
}

function addSituacion(registroSitHosp: RegistroSitHosp): Promise<RegistroSitHosp>{
  return situacionRepository.addSituacion(registroSitHosp);
}

export default { addSituacion, getSituacion };