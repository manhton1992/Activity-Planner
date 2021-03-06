/**Pakage import */
import{IActivityPlannerModel, activityPlannerModel} from "../../model/ActivityPlanne";
import { Request, Response, response } from "express";

/**Variables */

const json2csv = require('json2csv').parse;
const fields = ['_id', 'name', 'description', 'startTime', 'endTime', 'place', 'priority', 'participant', 'category', 'createdAt', 'updatedAt'];
const moment = require('moment');

/*
const fs = require('fs');
const moment = require('moment');
var csv_export=require('csv-export');
const path = require('path');
*/

/**Get All Activity Planners */
export const getAllActivityPlanner = async (req: Request, res: Response) => {
    const planners : IActivityPlannerModel[] = await activityPlannerModel.find();
    res.send({
        data : planners,
    });
}
/** Create New Planner */
export const createNewPlanner = async (req: Request, res: Response) => {
  const myBody = req.body;
  if(myBody.startTime < Date.now() || myBody.startTime >= myBody.endTime || myBody.endTime < Date.now()) {
    res.send({
      status: 'Planner can not create! Start Time muss lesser than End Time and bigger than Now',
      data: myBody
    });
  } else {

    const existPlann: IActivityPlannerModel | null= await activityPlannerModel.findOne({
      $and: [
        {"startTime": {"$lt": myBody.startTime}},
        {"endTime" : {"$gt" : myBody.startTime}}
      ],
    });
    if(existPlann === null){
      const createPlanner: IActivityPlannerModel = await activityPlannerModel.create(req.body);
      res.status(201).send({
          data: createPlanner
      });
    } else{
      res.send({
        status: 'Planner can not create! because you have a tragic plan',
        data: myBody
      });
    }

    
  }
    
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

/**Download ActivityPlanner in Csv file */
/*
export const downLoadFileActivity = async (req: Request, res : Response) => {
    activityPlannerModel.find(function (err, activitPlanners) {
        if (err) {
          return res.status(500).json({ err });
        }
        else {
          let csv;
          try {
            csv = json2csv(activitPlanners, { fields });
          } catch (err) {
            return res.status(500).json({ err });
          }
          const dateTime = moment().format('YYYYMMDDhhmmss');
          const filePath = path.join(__dirname, "..", "..","src", "exportFile", "activitPlanners" + dateTime + ".csv");
  
          fs.writeFile(filePath, csv, function () {
            if (err) {
              return res.json(err).status(500);
            }
            else {
              setTimeout(function () {
                fs.unlinkSync(filePath); // delete this file after 3000 seconds
              }, 3000000)
              return res.end(json2csv(activitPlanners, { fields }));
            } 
          });
        }
      })
    }
    */
   /**Download ActivityPlanner in Csv file */
    export const downLoadFileActivity = async (req: Request, res : Response) => {
      activityPlannerModel.find(function (err, activitPlanners) {
        let csv;
        try {
          csv = json2csv(activitPlanners, { fields });
          res.setHeader('Content-disposition', 'attachment; filename=activityPlanners.csv');
          res.set('Content-Type', 'text/csv');
          res.status(200).send(csv);

        } catch (err) {
          return res.status(500).json({ err });
        }
      });
    }
  /** Get All ActivityPlanner in past */
  export const getAllPastActivityPlanner = async(req: Request, res : Response) => {
    const date = new Date();
    const planners : IActivityPlannerModel[] = await activityPlannerModel.find({
      $and: [
        {"endTime": {"$lt": date}}
      ],
    });
    res.send({
        data : planners,
    });
  }
/** Get All ActivityPlanner in future */
export const getAllUpcommingActivityPlanner = async(req: Request, res : Response) => {
  const date = new Date();
  const planners : IActivityPlannerModel[] | null= await activityPlannerModel.find({
    $and: [
      {"startTime": {"$gt": date}}
    ],
  });
  res.send({
      data : planners,
  });
}