const Song = require('./Song.js');

describe('Song model', () => {

  it('has a required artist', () => {
    const song = new Song({ });
    const { errors } = song.validateSync();
    expect(errors.artist.message)
      .toEqual('Path `artist` is required.');
  });

  it('has a required song title', () => {
    const song = new Song({});
    const { errors } = song.validateSync();
    expect(errors.song.message)
      .toEqual('Path `song` is required.');
  });
});
