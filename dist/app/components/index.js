"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioHospital_1 = __importDefault(require("./usuarioHospital"));
const message_1 = __importDefault(require("./message"));
const postulacion_1 = __importDefault(require("./postulacion"));
const situacion_1 = __importDefault(require("./situacion"));
const curriculum_1 = __importDefault(require("./curriculum"));
const usuarioFuncionario_1 = __importDefault(require("./usuarioFuncionario"));
const user_1 = __importDefault(require("./user"));
const components = [
    message_1.default,
    usuarioHospital_1.default,
    postulacion_1.default,
    situacion_1.default,
    curriculum_1.default,
    usuarioFuncionario_1.default,
    user_1.default
];
exports.default = components;
