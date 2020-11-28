import { DatoUsFunc } from '../../models/datoUsuarioFunc.model';
import datoUsFuncSchema from "./datoUsFunc.schema";

function addDatoUsFunc(datoUsFunc: DatoUsFunc): Promise<DatoUsFunc>{
  return datoUsFuncSchema.create<DatoUsFunc>(datoUsFunc);
}

async function getDatoUsFunc(): Promise<DatoUsFunc[]>{
  return datoUsFuncSchema.find();
}

export default { addDatoUsFunc, getDatoUsFunc };