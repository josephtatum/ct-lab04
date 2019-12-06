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
});
