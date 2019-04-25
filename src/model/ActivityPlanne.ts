/**Package import */
import {Document, Schema, Model, model} from 'mongoose';
import { Timestamp } from 'bson';

export interface IActivityPlannerModel extends Document{
    name: string;
    description: string;
    startTime: Date;
    endTime: Date;
    place: string;
    priority: number;
    participant: string;
    category: string;
}

export const activityPlannerSchema : Schema = new Schema({  
    name : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: false,
    },
    place : {
        type : String,
        required : true,
    },
    priority : {
        type: Number,
        required: false,
        default: 0,
    },
    participant : {
        type : String,
        required: false,
    },
    category : {
        type: String,
        required: false,
    },
    startTime : {
        type: Date,
        required: true,
    },
    endTime : {
        type: Date,
        required: true,
    },
}, {timestamps: true},);

export const activityPlannerModel: Model<IActivityPlannerModel> = model<IActivityPlannerModel>('ActivityPlanner', activityPlannerSchema);