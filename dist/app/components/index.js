"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listaPost_1 = __importDefault(require("./listaPost"));
const message_1 = __importDefault(require("./message"));
const postulacion_1 = __importDefault(require("./postulacion"));
const situacion_1 = __importDefault(require("./situacion"));
const datoUsFunc_1 = __importDefault(require("./datoUsFunc"));
const curriculum_1 = __importDefault(require("./curriculum"));
const components = [
    message_1.default,
    listaPost_1.default,
    postulacion_1.default,
    situacion_1.default,
    datoUsFunc_1.default,
    curriculum_1.default
];
exports.default = components;
