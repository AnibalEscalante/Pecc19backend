"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    camasDisponibles: { type: Number, required: true },
    camasOcupadas: { type: Number, required: true },
    camasTotales: { type: Number, required: true },
    pacientesDerivados: { type: Number, required: true },
    medicos: { type: Number, required: true },
    kinesiologos: { type: Number, required: true },
    tens: { type: Number, required: true },
    enfermeria: { type: Number, required: true },
    email: { type: String, required: true }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Situacion', schema, 'situaciones');
