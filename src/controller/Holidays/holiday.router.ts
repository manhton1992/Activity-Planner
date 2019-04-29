/**Pakage Import */

import * as express from 'express';
import { getAllHolidays } from './holiday.controller';
import { logTime } from '../../middleware/timelogger';

/**Variables */
export const holodayRouter: express.Router = express.Router({mergeParams:  true});

/**Basis routes */
holodayRouter.get('/',logTime, getAllHolidays);