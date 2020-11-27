import { User } from '../../models/user.model';
import userRepository from "./user.repository";


function getUser(email: string){
  return userRepository.getUser(email);
}

function addUser(user: User): Promise<User>{
  user.nombre = user.nombre.toLocaleLowerCase();
  user.apellido = user.apellido.toLocaleLowerCase();
  user.email = user.email.toLocaleLowerCase();
  
  return userRepository.addUser(user);
}

export default { addUser, getUser };