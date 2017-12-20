//setting schema and model for migraine entries.
//TO BE used in mongoDB docs 

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  intensity: { type: Number, required: true },
  triggers: { type: [String] },
  water: { type: Number, required: true },
  journal: { type: String, required: false },
  created: { type: Date, default: Date.now }
});

/**
 * apiRepr
 *
 * Custom representation of a migraine occurrence stored in database
 */
schema.methods.apiRepr = function() {
  return {
    id: this._id,
    intensity: this.intensity,
    triggers: this.triggers,
    water: this.water,
    journal: this.journal,
    created: this.created
  };
}

const model = mongoose.model('migraine', schema);

module.exports = { schema, model}
