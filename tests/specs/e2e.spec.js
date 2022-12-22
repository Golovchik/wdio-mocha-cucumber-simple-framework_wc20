const {page} = require('../../po/pages/index');

describe('Simple example', function() {
  it('should open page', async () => {
    await page('schedule').open();
  });
});
