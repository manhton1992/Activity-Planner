"use strict";
/**Pakage Import */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const feiertag_controller_1 = require("./feiertag.controller");
/**Variables */
exports.feierTagRouter = express.Router({ mergeParams: true });
/**Basis routes */
exports.feierTagRouter.get('/', feiertag_controller_1.getAllFeierTags);
//# sourceMappingURL=feiertag.router.js.map