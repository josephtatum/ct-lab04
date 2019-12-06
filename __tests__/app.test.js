const request = require('supertest');
require('../lib/utils/connect')();
const app = require('../lib/app.js');

const Artist = require('../lib/models/Artist.js');

describe('Each model', () => {


  it('has a route that gets an artist by id', async() => {
    const artist = await Artist.create({
      name: 'Noah Puckett',
      birthdate: '08/02/1992',
      origin: 'Spain'
    });

    return request(app)
      .get(`/artist/${artist._id}`)
      .then(res => {
        console.log(res);
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0,
          name: 'Noah Puckett',
          birthdate: '08/02/1992',
          origin: 'Spain'
        });
      });
  });

  it('has a route that posts an artist', () => {
    return request(app)
      .post('/artist')
      .send({
        name: 'Rosalia',
        birthdate: '08/02/1992',
        origin: 'Spain'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0,
          name: 'Rosalia',
          birthdate: '08/02/1992',
          origin: 'Spain'
        });
      });
  });
});
