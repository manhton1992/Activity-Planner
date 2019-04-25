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
const task_controller_1 = require("./task.controller");
const timelogger_1 = require("../../middleware/timelogger");
const errorhandler_1 = require("../../middleware/errorhandler");
/**Variables */
exports.taskRouter = express.Router({ mergeParams: true });
/**Basis routes */
exports.taskRouter.get('/', timelogger_1.logTime, errorhandler_1.wrapAsync(task_controller_1.getAllTask));
/** Get a Single task */
exports.taskRouter.get('/:taskId', timelogger_1.logTime, errorhandler_1.wrapAsync(task_controller_1.getSingleTask));
/** Create New Task */
exports.taskRouter.post("/", timelogger_1.logTime, errorhandler_1.wrapAsync(task_controller_1.createNewTask));
/**Delete Task */
exports.taskRouter.delete("/:taskId", timelogger_1.logTime, errorhandler_1.wrapAsync(task_controller_1.deleteTask));
/**Update Task */
exports.taskRouter.put("/:taskId", timelogger_1.logTime, errorhandler_1.wrapAsync(task_controller_1.updateTask));
//# sourceMappingURL=task.router.js.map