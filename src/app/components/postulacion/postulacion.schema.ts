import { Schema, model, Document } from "mongoose";
import { Postulacion } from '../../models/postulacion';

const definition: Partial<Record<keyof Postulacion, any>> = {
  _idUsuario: { type: String, required: true },
  _idhosp: { type: String, required: true},
  aprobado: { type: Boolean, default: false}
};

const schema: Schema<Postulacion> = new Schema(definition)

export default model<Postulacion & Document>('Postulacion', schema, 'postulaciones');