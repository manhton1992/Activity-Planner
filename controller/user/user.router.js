"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Packet imports */
const express = __importStar(require("express"));
const user_controller_1 = require("./user.controller");
/**Variables */
exports.userRouter = express.Router({ mergeParams: true });
/**Basis routes */
exports.userRouter.get('/', user_controller_1.getAllUser);
//# sourceMappingURL=user.router.js.map