import { Schema, model, Document } from "mongoose";
import { Postulacion } from '../../models/postulacion';

const definition: Partial<Record<keyof Postulacion, any>> = {
  //_id: { type: Number, required: false },
  _idUsuario: { type: String, required: true },
  _idhosp: { type: String, required: true}
};

const schema: Schema<Postulacion> = new Schema(definition)

export default model<Postulacion & Document>('Postulacion', schema, 'postulaciones');