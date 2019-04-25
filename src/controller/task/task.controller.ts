
import{ITaskModel,taskModel} from "../../model/task";
import {Request, Response} from "express";
export const getAllTask = async (req: Request, res:Response) => {
    //res.send('Hello world');
    const tasks : ITaskModel[] = await taskModel.find();
    //throw new Error('Oh no Something heppen!');
    res.send({
        data : tasks,
    });
}

export const getSingleTask = async (req: Request, res: Response) => {
    const foundTask: ITaskModel | null = await taskModel.findById(req.params.taskId);
    //throw new Error('Oh no Something heppen!');
    res.send({
        status : 'ok',
        data: foundTask
    });
}

export const createNewTask =  async (req: Request, res : Response) => {
    const createdTask: ITaskModel =  await taskModel.create(req.body);
    res.status(201).send({
        data: createdTask
    });
}

export const deleteTask = async (req: Request, res : Response) => {
    const deleteTask: ITaskModel | null =  await taskModel.findByIdAndDelete(req.params.taskId);
    res.send({
        data: deleteTask
    });
}

export const updateTask =  async (req: Request, res : Response) => {
    const updateTask: ITaskModel | null =  await taskModel.findByIdAndUpdate(req.params.taskId, req.body, {new : true,});
    res.send({
        data: updateTask
    });
}