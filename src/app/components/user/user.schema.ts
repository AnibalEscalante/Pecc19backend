import { Schema, model, Document } from "mongoose";
import { User } from '../../models/user.model';

const definition: Partial<Record<keyof User, any>> = {
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  celular: { type: Number, required: true },
  password: { type: String, required: true },
  tipoUsuario: { type: String, default: 'basic' }
};

const schema: Schema<User> = new Schema(definition)

export default model<User & Document>('User', schema, 'users');