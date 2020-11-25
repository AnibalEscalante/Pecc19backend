import { Message } from '../../models/message.model';
import messageRepository from "./message.repository";


async function getMessage(): Promise<Message[]>{
  return messageRepository.getMessage();
}

function addMessage(message: Message): Promise<Message>{
  message.nombreClinica = message.nombreClinica.toLowerCase();
  
  return messageRepository.addMessage(message);
}

export default { addMessage, getMessage };