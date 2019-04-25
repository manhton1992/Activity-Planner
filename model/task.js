"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Packet Import */
const mongoose_1 = require("mongoose");
exports.taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    priority: {
        type: Number,
        requiredPaths: false,
        default: 0,
    },
    done: {
        type: Boolean,
        required: false,
        default: false,
    }
}, { timestamps: true });
exports.taskModel = mongoose_1.model('Task', exports.taskSchema);
//# sourceMappingURL=task.js.map