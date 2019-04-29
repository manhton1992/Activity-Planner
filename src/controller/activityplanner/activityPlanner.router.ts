/**package import */
import * as express from 'express';
import { logTime } from '../../middleware/timelogger';
import { wrapAsync } from '../../middleware/errorhandler';
import { getAllActivityPlanner, createNewPlanner, getSinglePlanner, deletePlanner, updatePlanner, downLoadFileActivity, getAllPastActivityPlanner, getAllUpcommingActivityPlanner } from './activityPlanner.controller';

/** Variables */
export const activityPlannerRouter: express.Router = express.Router({mergeParams:  true});


/**Down Load ActivityPlanner in Csv File */
activityPlannerRouter.get('/download', logTime, wrapAsync(downLoadFileActivity));
/** Get all Past activityPlanner */
activityPlannerRouter.get('/past', logTime, wrapAsync(getAllPastActivityPlanner));

/**Get All upcomming activityPlanner */
activityPlannerRouter.get('/upcomming', logTime, wrapAsync(getAllUpcommingActivityPlanner));
/** Get All Planner */
activityPlannerRouter.get('/', logTime, wrapAsync(getAllActivityPlanner));

/** Create New Planner */
activityPlannerRouter.post('/', logTime, wrapAsync(createNewPlanner));

/** Get Single Planner */
activityPlannerRouter.get('/:activityPlannerId', logTime, wrapAsync(getSinglePlanner));

/** Delete Planner */
activityPlannerRouter.delete('/:activityPlannerId', logTime, wrapAsync(deletePlanner));

/**Update Planner */
activityPlannerRouter.put('/:activityPlannerId', logTime, wrapAsync(updatePlanner));