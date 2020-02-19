export default (state = {
  page: "MAIN_PAGE"
}, action) => {
  switch (action.type) {
    case "SHOW_MAIN_PAGE":
      state = {
        ...state,
        page: "MAIN_PAGE"
      };
      break;
    case "SHOW_GALLERY_PAGE":
      state = {
        ...state,
        page: "GALLERY_PAGE"
      };
      break;
    case "SHOW_RECIPE_PAGE":
      state = {
        ...state,
        page: "RECIPE_PAGE"
      };
      break;
    default:
      break;
  }

  return state;
};