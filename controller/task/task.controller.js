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
const task_1 = require("../../model/task");
exports.getAllTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //res.send('Hello world');
    const tasks = yield task_1.taskModel.find();
    //throw new Error('Oh no Something heppen!');
    res.send({
        data: tasks,
    });
});
exports.getSingleTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const foundTask = yield task_1.taskModel.findById(req.params.taskId);
    //throw new Error('Oh no Something heppen!');
    res.send({
        status: 'ok',
        data: foundTask
    });
});
exports.createNewTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const createdTask = yield task_1.taskModel.create(req.body);
    res.status(201).send({
        data: createdTask
    });
});
exports.deleteTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deleteTask = yield task_1.taskModel.findByIdAndDelete(req.params.taskId);
    res.send({
        data: deleteTask
    });
});
exports.updateTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const updateTask = yield task_1.taskModel.findByIdAndUpdate(req.params.taskId, req.body, { new: true, });
    res.send({
        data: updateTask
    });
});
//# sourceMappingURL=task.controller.js.map