"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const situacion_network_1 = __importDefault(require("./situacion.network"));
const situacion = express_1.default();
situacion.use('/situacion', situacion_network_1.default);
exports.default = situacion;
