import { User } from '../../models/user.model';
import userSchema from "./user.schema";

function addUser(user:User): Promise<User>{
  return userSchema.create<User>(user);
}

function getUser(email: string){
  return userSchema.findOne({ email: email });
}

export default { addUser, getUser };