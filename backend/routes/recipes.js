const router = require('express').Router();
let Recipe = require('../models/recipe.model');

// GET - Get all recipes from database
router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET - Get all matching recipe from database
router.route('/:name').get((req, res) => {
  const name = req.params.name;

  Recipe.find().byName(name)
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE - DELETE matching recipe from database
router.route('/:name').delete((req, res) => {
  const name = req.params.name;

  Recipe.findOneAndDelete({"name": name})
    .then(recipes => res.json('Deleted ' + recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST - save recipe to database
router.route('/add').post((req, res) => {
  const name = req.body.name;
  // const time = Number(req.body.time);
  const time = req.body.time;
  const brief = req.body.brief;
  const ingredients = req.body.ingredients;
  const directions = req.body.directions;
  const notes = req.body.notes;

  const newRecipe = new Recipe({
    name,
    time,
    brief,
    ingredients,
    directions,
    notes
  });

  newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;