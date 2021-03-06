/**Package imports  */
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ITaskModel, taskModel } from './model/task';
import * as bodyParser from 'body-parser';
import { globalRouter } from './controller/router';
import { globalErrorHandler } from './middleware/errorhandler';
import config from 'config';

/**Variables */
var cors = require('cors');
export const app :express.Application = express();
app.use(cors());
app.use(bodyParser.json());
var datetime = require('node-datetime');

/** Setup Database */
mongoose.connect(config.get('database.host'), {useNewUrlParser : true});

app.use('/api', globalRouter);

app.use(globalErrorHandler);
/** Start server */
app.listen(config.get('server.port'), () => {
    console.log('Server is running...');
});
console.log(process.env.NODE_ENV);