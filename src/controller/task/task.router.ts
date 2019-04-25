/** Packet imports */
import * as express from 'express';
import { getAllTask, getSingleTask, createNewTask, deleteTask, updateTask } from './task.controller';
import { logTime } from '../../middleware/timelogger';
import { wrapAsync } from '../../middleware/errorhandler';

/**Variables */
export const taskRouter: express.Router = express.Router({mergeParams:  true});

/**Basis routes */
taskRouter.get('/', logTime, wrapAsync(getAllTask));

/** Get a Single task */
taskRouter.get('/:taskId', logTime, wrapAsync(getSingleTask));

/** Create New Task */
taskRouter.post("/", logTime, wrapAsync(createNewTask));

/**Delete Task */
taskRouter.delete("/:taskId", logTime, wrapAsync(deleteTask));

/**Update Task */
taskRouter.put("/:taskId", logTime, wrapAsync(updateTask));