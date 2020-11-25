"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listaPost_network_1 = __importDefault(require("./listaPost.network"));
const listaPost = express_1.default();
listaPost.use('/listaPost', listaPost_network_1.default);
exports.default = listaPost;
