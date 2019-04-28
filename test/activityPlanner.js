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
            //res.body.data.length.should.be.eql(1);
            done();
        });
    });
});
/** Test delete task route */
describe('/DELETE activity planner/:id', () => {
    it('it should DELETE a Planner by the given id', (done) => {
        /** Create beer model */
        const actplann = new ActivityPlanne_1.activityPlannerModel({
            name: 'Staubsaugen',
            startTime: "2019-05-01T14:30:00.782Z",
            endTime: "2019-05-01T14:15:30.782Z",
            place: "Wasche Hause",
        });
        /** Save beer and test it */
        actplann.save((err, newPlann) => {
            chai_1.default
                .request(server_1.app)
                .delete(`/api/activityPlanners/${newPlann.id}`)
                .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
});
/** Test get single Planner by id*/
describe('/GET activityPlanner/:id ', () => {
    it('it should GET a Planner by the given id', (done) => {
        /** Create beer model */
        const actPlanner = new ActivityPlanne_1.activityPlannerModel({
            name: 'Db2',
            startTime: "2019-05-01T14:30:00.782Z",
            endTime: "2019-05-01T14:15:30.782Z",
            place: "Wasche Hause",
        });
        actPlanner.save((err, NewPlanner) => {
            chai_1.default
                .request(server_1.app)
                .get(`/api/activityPlanners/${NewPlanner.id}`)
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.include.key('data');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('name');
                res.body.data.should.have.property('priority');
                res.body.data.should.have.property('startTime');
                res.body.data.should.have.property('endTime');
                res.body.data.should.have.property('place');
                res.body.data.should.have.property('_id').eql(NewPlanner.id);
                done();
            });
        });
    });
});
/** Test create new Planner correctly */
describe('/POST Activity Planner', () => {
    // Functional test
    it('it should POST a correct Planner', (done) => {
        /** Create beer model */
        const actPlanner = new ActivityPlanne_1.activityPlannerModel({
            name: 'Db2',
            startTime: "2019-05-01T14:30:00.782Z",
            endTime: "2019-05-01T14:15:30.782Z",
            place: "Wasche Hause",
        });
        chai_1.default.request(server_1.app)
            .post('/api/activityPlanners')
            .send(actPlanner)
            .end((err, res) => {
            res.should.have.status(201);
            res.body.should.include.key('data');
            res.body.data.should.be.a('object');
            res.body.data.should.have.property('name');
            res.body.data.should.have.property('priority');
            res.body.data.should.have.property('startTime');
            res.body.data.should.have.property('endTime');
            res.body.data.should.have.property('place');
            done();
        });
    });
    /** Test create invalid Planner */
    it('should not POST a Planner without name oder Time oder plact field', (done) => {
        const actPlanner = {};
        chai_1.default.request(server_1.app)
            .post('/api/activityPlanners')
            .send(actPlanner)
            .end((err, res) => {
            res.should.have.status(500);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            res.body.error.should.have.property('errors');
            res.body.error.errors.should.have.property('name');
            res.body.error.errors.should.have.property('startTime');
            res.body.error.errors.should.have.property('endTime');
            res.body.error.errors.should.have.property('place');
            res.body.error.errors.name.should.have.property('kind').eql('required');
            res.body.error.errors.startTime.should.have.property('kind').eql('required');
            res.body.error.errors.endTime.should.have.property('kind').eql('required');
            res.body.error.errors.place.should.have.property('kind').eql('required');
            done();
        });
    });
});
//# sourceMappingURL=activityPlanner.js.map