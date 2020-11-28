import { usuarioFuncionario } from '../../models/usuarioFuncionario.model';
import usuarioFuncionarioRepository from "./usuarioFuncionario.repository";


async function getusuarioFuncionario(): Promise<usuarioFuncionario[]>{
  return usuarioFuncionarioRepository.getusuarioFuncionario();
}

function addusuarioFuncionario(usuarioFuncionario: usuarioFuncionario): Promise<usuarioFuncionario>{
    
  return usuarioFuncionarioRepository.addusuarioFuncionario(usuarioFuncionario);
}

export default { addusuarioFuncionario, getusuarioFuncionario };