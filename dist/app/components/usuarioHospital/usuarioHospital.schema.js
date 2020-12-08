"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    email: { type: String, required: true },
    telefonoContacto: { type: Number },
    emailContacto: { type: String },
    nombreHospital: { type: String },
    direccionHospital: { type: String },
    promocionUsuario: { type: Boolean },
    documentacion: { type: String }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('UsuarioHospital', schema, 'usuarioHospitales');
