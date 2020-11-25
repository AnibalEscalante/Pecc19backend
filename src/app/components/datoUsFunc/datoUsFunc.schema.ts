import { Schema, model, Document } from "mongoose";
import { DatoUsFunc } from "../../models/datoUsuarioFunc.model";

const definition: Partial<Record<keyof DatoUsFunc, any>> = {
  nombreUsuario: { type: String, required: true }
};

const schema: Schema<DatoUsFunc> = new Schema(definition)

export default model<DatoUsFunc & Document>('DatoUsFunc', schema, 'datoUsFuncs');