export interface Message{
  _id?: number | string;
  nombreClinica: string;
  cuposMedicos: number;
  cuposKinesiologo: number;
  cuposTens: number;
  cuposEnfermeria: number;
  ubicacionClinica: string;
  contactoClinica: string;
  estadoSolicitud: string;
}