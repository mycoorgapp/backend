// Initializes the `activity-log` service on path `/activity-log`
const createService = require('feathers-mongoose');
const createModel = require('../../models/activity-log.model');
const hooks = require('./activity-log.hooks');
const filters = require('./activity-log.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'activity-log',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/activity-log', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('activity-log');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
