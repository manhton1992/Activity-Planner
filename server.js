"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**Package imports  */
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bodyParser = __importStar(require("body-parser"));
const router_1 = require("./controller/router");
const errorhandler_1 = require("./middleware/errorhandler");
const config_1 = __importDefault(require("config"));
/**Variables */
exports.app = express_1.default();
exports.app.use(bodyParser.json());
var datetime = require('node-datetime');
/** Setup Database */
mongoose_1.default.connect(config_1.default.get('database.host'), { useNewUrlParser: true });
exports.app.use('/api', router_1.globalRouter);
exports.app.use(errorhandler_1.globalErrorHandler);
/** Start server */
exports.app.listen(config_1.default.get('server.port'), () => {
    console.log('Server is running...');
});
console.log(process.env.NODE_ENV);
//# sourceMappingURL=server.js.map