import request from "supertest";
import * as eventCtrl from "./routes/events.controller";
import server from "./index";
import app from './app'

describe("when the fields are missing", () => {
  test("should respond with a status code of 400", async () => {
    const bodyData = [
      { firstName: "firstName" },
      { lastName: "lastName" },
      { lastName: "magaszak123@gmail.com" },
      { lastName: "2020-12-09" },
    ];
    for (const body of bodyData) {
      const response = await request(server).post("/events").send(body);
      expect(response.statusCode).toBe(500);
    }
  });
});

describe("Test the GET /events", () => {
  test("It should response the GET method", () => {
    return request(server)
      .get("/events")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the /events/id path with proper id", () => {
    test("It should response the GET method", () => {
      return request(server)
        .get("/events/615c5acf4fe23c647c2002f2")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });
  describe("Test the /events/id path with wrong id", () => {
    test("It should response the GET method", () => {
      return request(server)
        .get("/events/abc")
        .then(response => {
          expect(response.statusCode).toBe(500);
        });
    });
  });

  describe('POST /events', function() {
    it('responds with json and 200', function(done) {
      request(app)
        .post('/events')
        .send({
            firstName: "aaa",
            lastName: "sss",
            email: "magaszak123@gmail.com",
            eventDate: "2020-12-09"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });


  describe('PUT /events/id', function() {
    it('responds with json and 200', function(done) {
      request(app)
        .put('/events/615c5acf4fe23c647c2002f2')
        .send({
            firstName: "aaa",
            lastName: "sss",
            email: "magaszak123@gmail.com",
            eventDate: "2020-12-09"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });