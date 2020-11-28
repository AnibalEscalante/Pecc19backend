import { Schema, model, Document } from "mongoose";
import { DatoUsHosp } from '../../models/datoUsuarioHosp.model';

const definition: Partial<Record<keyof DatoUsHosp, any>> = {
};

const schema: Schema<DatoUsHosp> = new Schema(definition)

export default model<DatoUsHosp & Document>('listaUsHosp', schema, 'listaushosps');