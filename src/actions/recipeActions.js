export function setRecipeName(name) {
  return {
    type: "SET_RECIPE_NAME",
    payload: name
  };
}

export function setRecipeTime(time) {
  return {
    type: "SET_RECIPE_TIME",
    payload: time
  };
}

export function setRecipeBrief(brief) {
  return {
    type: "SET_RECIPE_BRIEF",
    payload: brief
  };
}

export function setRecipeIngredients(ingredients) {
  return {
    type: "SET_RECIPE_INGREDIENTS",
    payload: ingredients
  };
}

export function setRecipeDirections(directions) {
  return {
    type: "SET_RECIPE_DIRECTIONS",
    payload: directions
  };
}

export function setRecipeNotes(notes) {
  return {
    type: "SET_RECIPE_NOTES",
    payload: notes
  };
}