"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const situacion_repository_1 = __importDefault(require("./situacion.repository"));
function getSituacion(email) {
    return situacion_repository_1.default.getSituacion(email);
}
function addSituacion(registroSitHosp) {
    return situacion_repository_1.default.addSituacion(registroSitHosp);
}
exports.default = { addSituacion, getSituacion };
