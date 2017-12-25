// Initializes the `homestay` service on path `/homestay`
const createService = require('feathers-mongoose');
const createModel = require('../../models/homestay.model');
const hooks = require('./homestay.hooks');
const filters = require('./homestay.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'homestay',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/homestay', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('homestay');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
