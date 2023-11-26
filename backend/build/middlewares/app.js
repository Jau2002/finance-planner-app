"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_body_1 = __importDefault(require("morgan-body"));
const root_routes_1 = __importDefault(require("../routes/root.routes"));
const badRequest_1 = __importDefault(require("../utils/badRequest"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ strict: true }));
app.use((0, cors_1.default)());
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
(0, morgan_body_1.default)(app, {
    theme: 'inverted',
    logReqDateTime: false,
    logIP: false,
    logReqUserAgent: false,
    immediateReqLog: false,
});
app.use('/', root_routes_1.default);
app.use('*', (_, res) => (0, badRequest_1.default)(res, 'Not exist this route'));
exports.default = app;
