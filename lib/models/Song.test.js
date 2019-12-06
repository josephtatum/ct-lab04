const Song = require('./Song.js');

describe('Song model', () => {

  it.skip('has a required artist', () => {
    const song = new Song({ });
    const { errors } = song.validateSync();
    expect(errors.artist.message)
      .toEqual('Path `artist` is required.');
  });

  it.skip('has a required song title', () => {
    const song = new Song({});
    const { errors } = song.validateSync();
    expect(errors.song.message)
      .toEqual('Path `song` is required.');
  });

  it.skip('must receive a Boolean for the favorite key', () => {
    const song = new Song({ artist: 'Rosalia', song: 'Con Altura', favorite: 'hello' });
    expect(song.validateSync().errors.favorite.message)
      .toEqual('Cast to Boolean failed for value "hello" at path "favorite"');
  });
});
