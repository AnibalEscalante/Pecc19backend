"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const situacion_controller_1 = __importDefault(require("./situacion.controller"));
const response_module_1 = __importDefault(require("../../modulos/response.module"));
const router = express_1.default.Router();
router.get("/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email = req.params.email;
    try {
        const result = yield situacion_controller_1.default.getSituacion(email);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const result = yield situacion_controller_1.default.addSituacion(body);
            response_module_1.default.success(req, res, result, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
