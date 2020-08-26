const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KlassSchema = new Schema({
  index: String,
  name: String,
  url: String
});

module.exports = mongoose.model('Klass', KlassSchema, 'klasses');
