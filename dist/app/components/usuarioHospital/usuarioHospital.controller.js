"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioHospital_repository_1 = __importDefault(require("./usuarioHospital.repository"));
function addusuarioHospital(usuarioHospital) {
    return usuarioHospital_repository_1.default.addusuarioHospital(usuarioHospital);
}
function getusuarioHospital() {
    return usuarioHospital_repository_1.default.getusuarioHospital();
}
function getusuarioHospitalById(id) {
    return usuarioHospital_repository_1.default.getusuarioHospitalById(id);
}
exports.default = { addusuarioHospital, getusuarioHospital, getusuarioHospitalById };
