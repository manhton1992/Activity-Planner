/**Pakage import */
import{IActivityPlannerModel, activityPlannerModel} from "../../model/ActivityPlanne";
import { Request, Response } from "express";


/**Get All Activity Planners */
export const getAllActivityPlanner = async (req: Request, res: Response) => {
    const planners : IActivityPlannerModel[] = await activityPlannerModel.find();
    res.send({
        data : planners,
    });
}

/** Create New Planner */
export const createNewPlanner = async (req: Request, res: Response) => {
    const createPlanner: IActivityPlannerModel = await activityPlannerModel.create(req.body);
    res.status(201).send({
        data: createPlanner
    });
}

/** Get single Planner */
export const getSinglePlanner = async (req: Request, res: Response) => {
    const foundPlanner: IActivityPlannerModel | null = await activityPlannerModel.findById(req.params.activityPlannerId);
    res.send({
        status : 'ok',
        data: foundPlanner
    });
}

/** Delete Planner*/
export const deletePlanner = async (req: Request, res : Response) => {
    const deletePlanner: IActivityPlannerModel | null =  await activityPlannerModel.findByIdAndDelete(req.params.activityPlannerId);
    res.send({
        data: deletePlanner
    });
}

/** Update Planner*/
export const updatePlanner =  async (req: Request, res : Response) => {
    const updatePlanner: IActivityPlannerModel | null =  await activityPlannerModel.findByIdAndUpdate(req.params.activityPlannerId, req.body, {new : true,});
    res.send({
        data: updatePlanner
    });
}