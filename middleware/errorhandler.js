"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = (func) => {
    return function (request, response, next) {
        func(request, response, next).catch(next);
    };
};
exports.globalErrorHandler = (error, request, response, next) => {
    response.status(500).send({ error, message: error.message });
};
//# sourceMappingURL=errorhandler.js.map