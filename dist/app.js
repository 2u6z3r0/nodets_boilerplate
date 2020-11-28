"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome to build together');
});
app.listen(port, () => console.log(`server started on ${port}`));
const name = 'pretty';
console.log(name);
console.log('    welcome to backend server');
//# sourceMappingURL=app.js.map