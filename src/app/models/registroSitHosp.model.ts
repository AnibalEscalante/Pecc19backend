export interface RegistroSitHosp{
  _id: number | string;
  camasTotales: number;
  camasDisponibles: number;
  camasOcupadas: number;
  pacientesDerivados: number;
  medicos: number;
  kinesiologos: number;
  tens: number;
  enfermeria: number;
  createdAt: Date;
  _idHospital: number | string;
}