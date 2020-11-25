import { Schema, model, Document } from "mongoose";
import { Message } from "../../models/message.model";

const definition: Partial<Record<keyof Message, any>> = {
  nombreClinica: { type: String, required: true }
};

const schema: Schema<Message> = new Schema(definition)

export default model<Message & Document>('Message', schema, 'messages');