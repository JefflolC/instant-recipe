const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    picture: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    brief: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: {
      type: String,
      required: true,
      trim: true,
    },
    directions: {
      type: String,
      required: true,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    }
}, {
    timestamps: true,
});

recipeSchema.query.byName = function(name) {
  return this.where({
    name: new RegExp(name, 'i')
  });
};

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;