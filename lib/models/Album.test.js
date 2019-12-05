const Album = require('./Album.js');

describe('Album model', () => {

  it('has a required artist', () => {
    const album = new Album({});
    const { errors } = album.validateSync();
    expect(errors.artist.message)
      .toEqual('Path `artist` is required.');
  });

  it('has a required release year', () => {
    const album = new Album({});
    const { errors } = album.validateSync();
    expect(errors.release.message).toEqual('Path `release` is required.');
  });

  it('has a required label', () => {
    const album = new Album({});
    const { errors } = album.validateSync();
    expect(errors.label.message).toEqual('Path `label` is required.');
  });

  it('must receive a number for release year', () => {
    const album = new Album({ release: 'idk' });
    const { errors } = album.validateSync();
    expect(errors.release.message).toEqual('Cast to Number failed for value \"idk\" at path \"release\"');
  });
});
