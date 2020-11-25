import { Message } from '../../models/message.model';
import messageSchema from "./message.schema";

function addMessage(message: Message): Promise<Message>{
  message.nombreClinica = message.nombreClinica.toLowerCase();
  return messageSchema.create<Message>(message);
}

async function getMessage(): Promise<Message[]>{
  return messageSchema.find();
}

export default { addMessage, getMessage };