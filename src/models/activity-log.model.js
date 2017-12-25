// activity-log-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const activityLog = new Schema({
    action: { type: String, required: true },
    action_slug: { type: String, required: true },
    article: { type: String, required: true },
    object: { type: String, required: false },
    entity: { type: String, required: true },
    comment: { type: String, required: false },
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  }, {
    timestamps: true
  });

  return mongooseClient.model('activityLog', activityLog);
};
