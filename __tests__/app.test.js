const request = require('supertest');
const app = require('../lib/app.js');

describe('Each model', () => {

  it('has a route that responses with a Norewegian greeting', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toEqual({ norskGreeting: 'Hei!' });
      });
  });

  it('has a route that posts an object', () => {
    return request(app)
      .post('/artist')
      .send({
        name: 'Rosalia',
        birthday: '08/02/1992',
        origin: 'Spain'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rosalia',
          birthday: '08/02/1992',
          origin: 'Spain'
        });
      });
  });
});
