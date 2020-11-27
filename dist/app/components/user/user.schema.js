"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    celular: { type: Number, required: true },
    password: { type: String, required: true },
    tipoUsuario: { type: String, default: 'basic' }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('User', schema, 'users');
