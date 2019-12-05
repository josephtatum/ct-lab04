const Artist = require('./Artist.js');

describe('Artist model', () => {

  it('has a required name', () => {
    const artist = new Artist({});
    const { errors } = artist.validateSync();
    expect(errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it('has a required birthdate', () => {
    const artist = new Artist({});
    const { errors } = artist.validateSync();
    expect(errors.birthdate.message).toEqual('Path `birthdate` is required.');
  });

  it('has a required country of origin', () => {
    const artist = new Artist({});
    const { errors } = artist.validateSync();
    expect(errors.origin.message).toEqual('Path `origin` is required.');
  });

});
