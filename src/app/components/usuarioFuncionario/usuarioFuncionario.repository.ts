import { usuarioFuncionario } from '../../models/usuarioFuncionario.model';
import usuarioFuncionarioSchema from "./usuarioFuncionario.schema";

function addusuarioFuncionario(usuarioFuncionario: usuarioFuncionario): Promise<usuarioFuncionario>{
  
  return usuarioFuncionarioSchema.create<usuarioFuncionario>(usuarioFuncionario);
}

async function getusuarioFuncionario(): Promise<usuarioFuncionario[]>{
  return usuarioFuncionarioSchema.find();
}

export default { addusuarioFuncionario, getusuarioFuncionario };