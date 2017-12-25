const assert = require('assert');
const app = require('../../src/app');

describe('\'homestay\' service', () => {
  it('registered the service', () => {
    const service = app.service('homestay');

    assert.ok(service, 'Registered the service');
  });
});
