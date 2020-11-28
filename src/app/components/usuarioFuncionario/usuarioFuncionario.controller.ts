import { DatoUsFunc } from '../../models/usuarioFuncionario.model';
import datoUsFuncRepository from "./usuarioFuncionario.repository";


async function getDatoUsFunc(): Promise<DatoUsFunc[]>{
  return datoUsFuncRepository.getDatoUsFunc();
}

function addDatoUsFunc(datoUsFunc: DatoUsFunc): Promise<DatoUsFunc>{
  datoUsFunc.nombreUsuario = datoUsFunc.nombreUsuario.toLowerCase();
  
  return datoUsFuncRepository.addDatoUsFunc(datoUsFunc);
}

export default { addDatoUsFunc, getDatoUsFunc };