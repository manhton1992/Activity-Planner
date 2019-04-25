/** Packet imports */
import * as express from 'express';
import { getAllUser } from './user.controller';

/**Variables */
export const userRouter: express.Router = express.Router({mergeParams:  true});

/**Basis routes */
userRouter.get('/', getAllUser);