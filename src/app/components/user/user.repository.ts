import { User } from '../../models/user.model';
import userSchema from "./user.schema";

function addUser(user:User): Promise<User>{
  return userSchema.create<User>(user);
}

function getUser(email: string){
  return userSchema.findOne({ email: email });
}
function getUserById(id: string){
  return userSchema.findById(id);
}
async function getusuario(): Promise<User[] | null>{
  return userSchema.find({
    promocionUsuario: true
    });
}


export default { addUser, getUser, getUserById, getusuario };