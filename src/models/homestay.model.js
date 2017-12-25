// homestay-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const homestay = new Schema({
    name: { type: String },
    address: { type: String },
    place: { type: String },
    district: { type: String},
    pincode: { type: String},
    map_location: [],
    rooms: { type: String },
   	discount: { type: String },
    rate: { type: String},
    text: { type: String },

  }, {
    timestamps: true
  });

  return mongooseClient.model('homestay', homestay);
};
