"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const whiteList_controller_1 = __importDefault(require("../controllers/whiteList.controller"));
const rootRouter = (0, express_1.Router)();
rootRouter.use('/list', whiteList_controller_1.default);
exports.default = rootRouter;
