"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('DatoUsFunc', schema, 'datoUsFuncs');
