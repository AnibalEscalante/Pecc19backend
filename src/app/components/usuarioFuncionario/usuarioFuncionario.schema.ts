import { Schema, model, Document } from "mongoose";
import { usuarioFuncionario } from '../../models/usuarioFuncionario.model';

const definition: Partial<Record<keyof usuarioFuncionario, any>> = {
  email: { type: String, required: true }
};

const schema: Schema<usuarioFuncionario> = new Schema(definition)

export default model<usuarioFuncionario & Document>('UsuarioFuncionario', schema, 'usuarioFuncionarios');