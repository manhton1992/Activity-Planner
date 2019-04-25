/** Package imports */
import chai from 'chai';
import chaiHttp from 'chai-http';

/** File imports */
import { taskModel } from '../model/task';
import { app } from '../server';

/** Chai plugins */
chai.use(chaiHttp);
chai.should();

/** Tests */
describe('Testing Tasks', () => {
  /** Clear the database before each test to have a clean start */
  beforeEach((done: MochaDone) => {
    taskModel.deleteMany({}, () => {
      done();
    });
  });

  /** Test get all Tasks route */
  describe('/GET all tasks', () => {
    it('should GET all the tasks (empty array)', (done: MochaDone) => {
      chai
        .request(app)
        .get('/api/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.include.key('data');
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });

  /** Test delete task route */
  describe('/DELETE tasks/:id', () => {
    it('it should DELETE a task by the given id', (done: MochaDone) => {
      /** Create beer model */
      const task = new taskModel({
        title: 'Staubsaugen',
      });
      /** Save beer and test it */
      task.save((err, newTask) => {
        chai
          .request(app)
          .delete(`/api/tasks/${newTask.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

  /** Test get single task by id*/
  describe('/GET tasks/:id ', () => {
    it('it should GET a task by the given id', (done: MochaDone) => {
      /** Create beer model */
      const task = new taskModel({
        title: 'Abwasch',
      });

      task.save((err, newTask) => {
        chai
          .request(app)
          .get(`/api/tasks/${newTask.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.include.key('data');
            res.body.data.should.be.a('object');
            res.body.data.should.have.property('title');
            res.body.data.should.have.property('priority');
            res.body.data.should.have.property('done');
            res.body.data.should.have.property('_id').eql(newTask.id);
            done();
          });
      });
    });
  });

  /** Test create new task correctly */
  describe('/POST tasks', () => {
    // Functional test
    it('it should POST a correct task', (done: MochaDone) => {
      /** Create beer model */
      const task = new taskModel({
        title: 'Auto waschen',
      });

      chai.request(app)
        .post('/api/tasks')
        .send(task)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.include.key('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('title');
          res.body.data.should.have.property('priority');
          res.body.data.should.have.property('done');
          done();
        });
    });
  });

  /** Test create invalid task */
  it('should not POST a task without title field', (done: MochaDone) => {
    const task = {};
    chai.request(app)
      .post('/api/tasks')
      .send(task)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.error.should.have.property('errors');
        res.body.error.errors.should.have.property('title');
        res.body.error.errors.title.should.have.property('kind').eql('required');
        done();
      });
  });
});
