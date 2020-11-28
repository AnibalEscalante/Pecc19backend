import { Schema, model, Document } from "mongoose";
import { DatoUsHosp } from '../../models/usuarioHospital.model';

const definition: Partial<Record<keyof DatoUsHosp, any>> = {
  nombreEncargado: { type: String, required: true }
};

const schema: Schema<DatoUsHosp> = new Schema(definition)

export default model<DatoUsHosp & Document>('listaUsHosp', schema, 'listaushosps');