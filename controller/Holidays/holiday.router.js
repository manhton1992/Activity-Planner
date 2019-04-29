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
const holiday_controller_1 = require("./holiday.controller");
const timelogger_1 = require("../../middleware/timelogger");
/**Variables */
exports.holodayRouter = express.Router({ mergeParams: true });
/**Basis routes */
exports.holodayRouter.get('/', timelogger_1.logTime, holiday_controller_1.getAllHolidays);
//# sourceMappingURL=holiday.router.js.map