"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**package import */
const express = __importStar(require("express"));
const timelogger_1 = require("../../middleware/timelogger");
const errorhandler_1 = require("../../middleware/errorhandler");
const activityPlanner_controller_1 = require("./activityPlanner.controller");
/** Variables */
exports.activityPlannerRouter = express.Router({ mergeParams: true });
/**Down Load ActivityPlanner in Csv File */
exports.activityPlannerRouter.get('/download', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.downLoadFileActivity));
/** Get all Past activityPlanner */
exports.activityPlannerRouter.get('/past', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.getAllPastActivityPlanner));
/**Get All upcomming activityPlanner */
exports.activityPlannerRouter.get('/upcomming', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.getAllUpcommingActivityPlanner));
/** Get All Planner */
exports.activityPlannerRouter.get('/', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.getAllActivityPlanner));
/** Create New Planner */
exports.activityPlannerRouter.post('/', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.createNewPlanner));
/** Get Single Planner */
exports.activityPlannerRouter.get('/:activityPlannerId', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.getSinglePlanner));
/** Delete Planner */
exports.activityPlannerRouter.delete('/:activityPlannerId', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.deletePlanner));
/**Update Planner */
exports.activityPlannerRouter.put('/:activityPlannerId', timelogger_1.logTime, errorhandler_1.wrapAsync(activityPlanner_controller_1.updatePlanner));
//# sourceMappingURL=activityPlanner.router.js.map