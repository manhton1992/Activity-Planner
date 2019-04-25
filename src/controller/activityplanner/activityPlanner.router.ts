/**package import */
import * as express from 'express';
import { logTime } from '../../middleware/timelogger';
import { wrapAsync } from '../../middleware/errorhandler';
import { getAllActivityPlanner, createNewPlanner, getSinglePlanner, deletePlanner, updatePlanner } from './activityPlanner.controller';

/** Variables */
export const activityPlannerRouter: express.Router = express.Router({mergeParams:  true});

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