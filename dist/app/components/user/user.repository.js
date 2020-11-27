"use strict";
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
exports.default = { addUser, getUser };
