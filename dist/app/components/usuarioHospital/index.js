"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioHospital_network_1 = __importDefault(require("./usuarioHospital.network"));
const listaPost = express_1.default();
listaPost.use('/listaPost', usuarioHospital_network_1.default);
exports.default = listaPost;
