// Initializes the `filter` service on path `/filter`
const createService = require('./filter.class.js');
const hooks = require('./filter.hooks');
const filters = require('./filter.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'filter',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/filter', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('filter');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
