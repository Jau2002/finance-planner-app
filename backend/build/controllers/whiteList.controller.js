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
const express_1 = require("express");
const createUser_service_1 = require("../service/createUser.service");
const NotFound_1 = __importDefault(require("../utils/NotFound"));
const whiteListController = (0, express_1.Router)();
whiteListController.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email } = req.body;
    if (!nombre || !email) {
        throw new NotFound_1.default('No jodas que MECO');
    }
    const user = yield (0, createUser_service_1.postUser)({ nombre, email });
    return res.status(204).json({ data: user, message: 'User is created' });
}));
whiteListController.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, createUser_service_1.getUsers)();
    return res.status(204).json({ data: user, message: 'all user' });
}));
exports.default = whiteListController;
