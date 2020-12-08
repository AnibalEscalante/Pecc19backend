import { Schema, model, Document } from "mongoose";
import { usuarioHospital } from '../../models/usuarioHospital.model';

const definition: Partial<Record<keyof usuarioHospital, any>> = {
  email: { type: String, required: true },
  telefonoContacto: {type: Number},
  emailContacto: {type: String},
  nombreHospital: {type: String},
  direccionHospital: {type: String},
  promocionUsuario: {type: Boolean},
  documentacion: {type: String}


};

const schema: Schema<usuarioHospital> = new Schema(definition)

export default model<usuarioHospital & Document>('UsuarioHospital', schema, 'usuarioHospitales');