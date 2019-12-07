const Artist = require('./Artist.js');

describe('Artist model', () => {

  it.skip('has a required name', () => {
    const artist = new Artist({});
    const { errors } = artist.validateSync();
    expect(errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it.skip('has a required birthdate', () => {
    const artist = new Artist({});
    const { errors } = artist.validateSync();
    expect(errors.birthdate.message).toEqual('Path `birthdate` is required.');
  });

  it.skip('has a required country of origin', () => {
    const artist = new Artist({});
    const { errors } = artist.validateSync();
    expect(errors.origin.message).toEqual('Path `origin` is required.');
  });

  it.skip('has a country of origin that is USA, Canada, or Spain', () => {
    const artist = new Artist({ origin: 'France' });
    const { errors } = artist.validateSync();
    expect(errors.origin.message).toEqual('`France` is not a valid enum value for path `origin`.');
  });

});
