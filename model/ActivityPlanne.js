"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**Package import */
const mongoose_1 = require("mongoose");
exports.activityPlannerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    place: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        required: false,
        default: 0,
    },
    participant: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
exports.activityPlannerModel = mongoose_1.model('ActivityPlanner', exports.activityPlannerSchema);
//# sourceMappingURL=ActivityPlanne.js.map