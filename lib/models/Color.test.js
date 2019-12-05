
const Color = require('./Color');

describe('Color Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const color = new Color({
        red: 255,
        green: 0,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });
});
