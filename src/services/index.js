const activityLog = require('./activity-log/activity-log.service.js');
const users = require('./users/users.service.js');
const homestay = require('./homestay/homestay.service.js');
const filter = require('./filter/filter.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(activityLog);
  app.configure(users);
  app.configure(homestay);
  app.configure(filter);
};
