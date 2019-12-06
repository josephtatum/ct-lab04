const Label = require('./Label.js');

describe('Label model', () => {

  it.skip('has a required name', () => {
    const label = new Label({});
    const { errors } = label.validateSync();
    expect(errors.name.message)
      .toEqual('Path `name` is required.');
  });

  it.skip('has a required yearEstablished', () => {
    const label = new Label({});
    const { errors } = label.validateSync();
    expect(errors.yearEstablished.message).toEqual('Path `yearEstablished` is required.');
  });

  it.skip('must be given a number in the yearEstablished key', () => {
    const label = new Label({ yearEstablished: 'idk' });
    const { errors } = label.validateSync();
    expect(errors.yearEstablished.message).toEqual('Cast to Number failed for value "idk" at path "yearEstablished"');
  });

  it.skip('has a required artistsSigned', () => {
    const label = new Label({});
    const { errors } = label.validateSync();
    expect(errors.artistsSigned.message).toEqual('Path `artistsSigned` is required.');
  });

  it.skip('must receive at least 0 for artistsSigned', () => {
    const label = new Label({ artistsSigned: -1 });
    const { errors } = label.validateSync();
    expect(errors.artistsSigned.message).toEqual('Path `artistsSigned` (-1) is less than minimum allowed value (0).');
  });

});
