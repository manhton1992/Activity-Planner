/** Packet Import */
import {Document, Schema, Model, model} from 'mongoose';
export interface ITaskModel extends Document{
    title: string;
    description: string;
    priority: number;
    done: boolean;
}

export const taskSchema : Schema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type: String,
        required: false,
    },
    priority: {
        type :  Number,
        requiredPaths: false,
        default: 0,
    },
    done: {
        type:Boolean,
        required: false,
        default: false,
    }
}, {timestamps: true},);

export const taskModel: Model<ITaskModel> = model<ITaskModel>('Task', taskSchema);