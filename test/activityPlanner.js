"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**package import */
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
/** File import */
const ActivityPlanne_1 = require("../model/ActivityPlanne");
const server_1 = require("../server");
/**chai plugins */
chai_1.default.use(chai_http_1.default);
chai_1.default.should();
/**Tests */
describe('Tesing activity Planner', () => {
    /**clear the database befor each test to have a clean start */
    beforeEach((done) => {
        ActivityPlanne_1.activityPlannerModel.deleteMany({}, () => {
            done();
        });
    });
});
/**Test get all Activity Planner */
describe('Get all Activity Planner', () => {
    it('should Get All Activity Planners (empty array)', (done) => {
        chai_1.default
            .request(server_1.app)
            .get('/api/activityPlanners')
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.include.key('data');
            res.body.data.should.be.a('array');
            res.body.data.length.should.be.eql(0);
            done();
        });
    });
});
//# sourceMappingURL=activityPlanner.js.map