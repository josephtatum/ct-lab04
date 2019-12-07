const request = require('supertest');
const mongoose = require('mongoose');
require('../lib/utils/connect')();
const app = require('../lib/app.js');

const Artist = require('../lib/models/Artist.js');

describe('Each model', () => {

  beforeAll(() => {
    return mongoose.connection.dropDatabase();
  });

  it('has a route that gets an artist by id', async() => {
    const artist = await Artist.create({
      name: 'Noah Puckett',
      birthdate: '08/02/1992',
      origin: 'Spain'
    });

    return request(app)
      .get(`/artist/${artist._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0,
          name: 'Noah Puckett',
          birthdate: '08/02/1992',
          origin: 'Spain'
        });
      });
  });

  it('has a route that gets all artists', () => {

    Artist.create({
      name: 'Joseph Tatum',
      birthdate: '08/02/1992',
      origin: 'Spain'
    });

    return request(app)
      .get('/artists')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          __v: 0,
          birthdate: '08/02/1992',
          name: 'Noah Puckett',
          origin: 'Spain'
        },
          
        {
          _id: expect.any(String),
          __v: 0,
          birthdate: '08/02/1992',
          name: 'Joseph Tatum',
          origin: 'Spain' 
        }]);
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

  it('has a route that updates an artist', async() => {
    const artist = await Artist.create({
      name: 'Jodi Bon Jodi',
      birthdate: '08/02/1992',
      origin: 'Spain'
    });

    return request(app)
      .put(`/artist/${artist._id}`)
      .send({
        origin: 'USA'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0,
          name: 'Jodi Bon Jodi',
          birthdate: '08/02/1992',
          origin: 'USA'
        });
      });
  });

  it('has a route that deletes an artist', async() => {

    const artist = await Artist.create({
      name: 'Joel Durham',
      birthdate: '08/02/1992',
      origin: 'Spain'
    });

    return request(app)
      .delete(`/artist/${artist._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0,
          name: 'Joel Durham',
          birthdate: '08/02/1992',
          origin: 'Spain'
        });
      });
  });
});
