"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const curriculum_network_1 = __importDefault(require("./curriculum.network"));
const curriculum = express_1.default();
curriculum.use('/curriculum', curriculum_network_1.default);
exports.default = curriculum;
