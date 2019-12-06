const Genre = require('./Genre.js');

describe('Genre model', () => {

  it('has a required name', () => {
    const genre = new Genre({});
    const { errors } = genre.validateSync();
    expect(errors.name.message)
      .toEqual('Path `name` is required.');
  });
  
  it('has a required continent of origin', () => {
    const genre = new Genre({});
    const { errors } = genre.validateSync();
    expect(errors.origin.message).toEqual('Path `origin` is required.');
  });
  
  it('has a continent of origin that exists on planet Earth', () => {
    const genre = new Genre({ origin: 'Mars' });
    const { errors } = genre.validateSync();
    expect(errors.origin.message).toEqual('`Mars` is not a valid enum value for path `origin`.');
  });

  it('has a required shortDescription', () => {
    const genre = new Genre({});
    const { errors } = genre.validateSync();
    expect(errors.shortDescription.message).toEqual('Path `shortDescription` is required.');
  });

  it('has a required shortDescription that is more than 25 characters', () => {
    const genre = new Genre({ shortDescription: 'is cool' });
    const { errors } = genre.validateSync();
    expect(errors.shortDescription.message).toEqual('Path `shortDescription` (`is cool`) is shorter than the minimum allowed length (25).');
  });

  it('has a required shortDescription that is less than 200 characters', () => {
    const genre = new Genre({ shortDescription: 'Flamenco is a professionalized art-form based on the various folkloric music traditions of southern Spain in the autonomous community of Andalusia. In a wider sense, the term refers to a variety of Spanish musical styles developed as early as the 19th century. The oldest record of flamenco dates to 1774 in the book Las Cartas Marruecas by José Cadalso (Akombo 2016, 240–241). Flamenco has been influenced by and associated with the Romani people in Spain; however, its origin and style are uniquely Andalusian (Hayes 2009, 31–37).' });
    const { errors } = genre.validateSync();
    expect(errors.shortDescription.message).toEqual('Path `shortDescription` (`Flamenco is a professionalized art-form based on the various folkloric music traditions of southern Spain in the autonomous community of Andalusia. In a wider sense, the term refers to a variety of Spanish musical styles developed as early as the 19th century. The oldest record of flamenco dates to 1774 in the book Las Cartas Marruecas by José Cadalso (Akombo 2016, 240–241). Flamenco has been influenced by and associated with the Romani people in Spain; however, its origin and style are uniquely Andalusian (Hayes 2009, 31–37).`) is longer than the maximum allowed length (200).');
  });

});
