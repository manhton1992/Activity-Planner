/**Pakage Import */

import * as express from 'express';
import { getAllFeierTags } from './feiertag.controller';

/**Variables */
export const feierTagRouter: express.Router = express.Router({mergeParams:  true});

/**Basis routes */
feierTagRouter.get('/', getAllFeierTags);