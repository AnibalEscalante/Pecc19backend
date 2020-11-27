"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("./user.repository"));
function getUser(email) {
    return user_repository_1.default.getUser(email);
}
function addUser(user) {
    user.nombre = user.nombre.toLocaleLowerCase();
    user.apellido = user.apellido.toLocaleLowerCase();
    user.email = user.email.toLocaleLowerCase();
    return user_repository_1.default.addUser(user);
}
exports.default = { addUser, getUser };
