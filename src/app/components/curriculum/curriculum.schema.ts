import { Schema, model, Document } from "mongoose";
import { Curriculum } from "../../models/curriculum.model";

const definition: Partial<Record<keyof Curriculum, any>> = {
  _id: { type: String, required: true },
  curriculum: { type: String, required: true}
};

const schema: Schema<Curriculum> = new Schema(definition)

export default model<Curriculum & Document>('Curriculum', schema, 'curriculums');