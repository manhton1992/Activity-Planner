"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**package imports */
const express = __importStar(require("express"));
const task_router_1 = require("./task/task.router");
const user_router_1 = require("./user/user.router");
const activityPlanner_router_1 = require("./activityplanner/activityPlanner.router");
exports.globalRouter = express.Router({ mergeParams: true });
exports.globalRouter.use('/tasks', task_router_1.taskRouter);
exports.globalRouter.use('/users', user_router_1.userRouter);
exports.globalRouter.use('/activityPlanners', activityPlanner_router_1.activityPlannerRouter);
//# sourceMappingURL=router.js.map