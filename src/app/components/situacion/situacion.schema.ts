import { Schema, model, Document } from "mongoose";
import { RegistroSitHosp } from '../../models/registroSitHosp.model';

const definition: Partial<Record<keyof RegistroSitHosp, any>> = {
  
  camasDisponibles: { type: Number, required: true},
  camasOcupadas: { type: Number, required: true},
  camasTotales: { type: Number, required: true},
  pacientesDerivados: { type: Number, required: true},
  medicos: { type: Number, required: true},
  kinesiologos: { type: Number, required: true},
  tens: { type: Number, required: true},
  enfermeria: { type: Number, required: true },
  email: { type: String, required: true}

};

const schema: Schema<RegistroSitHosp> = new Schema(definition)

export default model<RegistroSitHosp & Document>('Situacion', schema, 'situaciones');