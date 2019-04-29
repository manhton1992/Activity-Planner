/**package imports */
import * as express from 'express';
import {taskRouter} from './task/task.router';
import { userRouter } from './user/user.router';
import { activityPlannerRouter } from './activityplanner/activityPlanner.router';
import { holodayRouter} from './Holidays/holiday.router';

export const globalRouter: express.Router = express.Router({mergeParams:  true});

globalRouter.use('/tasks', taskRouter);
globalRouter.use('/users', userRouter);
globalRouter.use('/activityPlanners', activityPlannerRouter);
globalRouter.use('/holidays', holodayRouter);

