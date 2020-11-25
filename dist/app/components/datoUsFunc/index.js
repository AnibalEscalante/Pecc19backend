"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const datoUsFunc_network_1 = __importDefault(require("./datoUsFunc.network"));
const datoUsFunc = express_1.default();
datoUsFunc.use('/funcionarios', datoUsFunc_network_1.default);
exports.default = datoUsFunc;
