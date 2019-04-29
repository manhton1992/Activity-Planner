"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**Pakage import */
const ActivityPlanne_1 = require("../../model/ActivityPlanne");
/**Variables */
const json2csv = require('json2csv').parse;
const fields = ['_id', 'name', 'description', 'startTime', 'endTime', 'place', 'priority', 'participant', 'category', 'createdAt', 'updatedAt'];
/*
const fs = require('fs');
const moment = require('moment');
var csv_export=require('csv-export');
const path = require('path');
*/
/**Get All Activity Planners */
exports.getAllActivityPlanner = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const planners = yield ActivityPlanne_1.activityPlannerModel.find();
    res.send({
        data: planners,
    });
});
/** Create New Planner */
exports.createNewPlanner = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const myBody = req.body;
    if (myBody.startTime < Date.now() || myBody.startTime >= myBody.endTime || myBody.endTime < Date.now()) {
        res.send({
            status: 'Planner can not create! Start Time muss lesser than End Time and bigger than Now',
            data: myBody
        });
    }
    else {
        const existPlann = yield ActivityPlanne_1.activityPlannerModel.findOne({
            $and: [
                { "startTime": { "$lt": myBody.startTime } },
                { "endTime": { "$gt": myBody.startTime } }
            ],
        });
        if (existPlann === null) {
            const createPlanner = yield ActivityPlanne_1.activityPlannerModel.create(req.body);
            res.status(201).send({
                data: createPlanner
            });
        }
        else {
            res.send({
                status: 'Planner can not create! because you have a tragic plan',
                data: myBody
            });
        }
    }
});
/** Get single Planner */
exports.getSinglePlanner = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const foundPlanner = yield ActivityPlanne_1.activityPlannerModel.findById(req.params.activityPlannerId);
    res.send({
        status: 'ok',
        data: foundPlanner
    });
});
/** Delete Planner*/
exports.deletePlanner = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deletePlanner = yield ActivityPlanne_1.activityPlannerModel.findByIdAndDelete(req.params.activityPlannerId);
    res.send({
        data: deletePlanner
    });
});
/** Update Planner*/
exports.updatePlanner = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const updatePlanner = yield ActivityPlanne_1.activityPlannerModel.findByIdAndUpdate(req.params.activityPlannerId, req.body, { new: true, });
    res.send({
        data: updatePlanner
    });
});
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
exports.downLoadFileActivity = (req, res) => __awaiter(this, void 0, void 0, function* () {
    ActivityPlanne_1.activityPlannerModel.find(function (err, activitPlanners) {
        let csv;
        try {
            csv = json2csv(activitPlanners, { fields });
            res.setHeader('Content-disposition', 'attachment; filename=activityPlanners.csv');
            res.set('Content-Type', 'text/csv');
            res.status(200).send(csv);
        }
        catch (err) {
            return res.status(500).json({ err });
        }
    });
});
//# sourceMappingURL=activityPlanner.controller.js.map