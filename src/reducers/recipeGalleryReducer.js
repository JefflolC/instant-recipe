export default (state = {
  recipes: [],
}, action) => {
  switch (action.type) {
    case "SET_RECIPE_GALLERY":
      state = {
        ...state,
        recipes: action.payload
      };
      break;
    default:
      break;
  }

  return state;
};