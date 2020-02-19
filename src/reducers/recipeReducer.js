export default (state = {
  name: '',
  time: '',
  brief: '',
  ingredients: '',
  directions: '',
  notes: '',
  showRecipe: false,
}, action )=> {
  switch (action.type) {
    case "SET_RECIPE_NAME":
      state = {
        ...state,
        name: action.payload,
      }
      break;
    case "SET_RECIPE_TIME":
      state = {
        ...state,
        time: action.payload,
      }
      break;
    case "SET_RECIPE_BRIEF":
      state = {
        ...state,
        brief: action.payload,
      }
      break;
    case "SET_RECIPE_INGREDIENTS":
      state = {
        ...state,
        ingredients: action.payload,
      }
      break;
    case "SET_RECIPE_DIRECTIONS":
      state = {
        ...state,
        directions: action.payload,
      }
      break;
    case "SET_RECIPE_NOTES":
      state = {
        ...state,
        notes: action.payload,
      }
      break;
    default:
      break;
  }
  return state;
};