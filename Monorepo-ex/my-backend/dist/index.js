"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.get('/data', (req, res) => {
    let r = (Math.random() + 1).toString(36).substring(7);
    res.cookie('auth-jwt', 'secret-3002');
    return res.json({
        'status': r
    }).status(200);
});
app.listen(3002);
