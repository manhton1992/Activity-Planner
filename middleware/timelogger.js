"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**Package imports */
exports.logTime = (req, res, next) => {
    console.log('time', Date.now());
    next();
};
//# sourceMappingURL=timelogger.js.map