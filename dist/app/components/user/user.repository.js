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
const user_schema_1 = __importDefault(require("./user.schema"));
function addUser(user) {
    return user_schema_1.default.create(user);
}
function getUser(email) {
    return user_schema_1.default.findOne({ email: email });
}
function getUserById(id) {
    return user_schema_1.default.findById(id);
}
function getusuario() {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.find({
            promocionUsuario: true
        });
    });
}
exports.default = { addUser, getUser, getUserById, getusuario };
