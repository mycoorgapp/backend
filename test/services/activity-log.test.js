const assert = require('assert');
const app = require('../../src/app');

describe('\'activity-log\' service', () => {
  it('registered the service', () => {
    const service = app.service('activity-log');

    assert.ok(service, 'Registered the service');
  });
});
