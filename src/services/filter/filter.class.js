const Filter = require('../../lib/filter');
const errors = require("feathers-errors");
/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    console.log("parmas  ", params)
    if (!params.query.for) {
      return Promise.reject(
        new errors.BadRequest("Do not know what to get filters for (Send query parameter for).")
      );
    }
    let filtersFor = params.query.for;
    delete params.query.for;
    return Filter.get(this.options.app, filtersFor, params.query);
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
