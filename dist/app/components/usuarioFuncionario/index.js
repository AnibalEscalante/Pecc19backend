"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioFuncionario_network_1 = __importDefault(require("./usuarioFuncionario.network"));
const usuarioFuncionario = express_1.default();
usuarioFuncionario.use('/funcionarios', usuarioFuncionario_network_1.default);
exports.default = usuarioFuncionario;
