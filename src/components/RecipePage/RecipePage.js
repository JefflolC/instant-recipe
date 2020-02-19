import React from 'react';
import './RecipePage.scss';

import { connect } from 'react-redux';

import RecipeDetails from '../RecipeDetails/RecipeDetails';
import RecipeGallery from '../RecipeGallery/RecipeGallery';

class RecipePage extends React.Component {
  render() {
    const showHideRecipePage = (this.props.page === 'GALLERY_PAGE' || this.props.page ==='RECIPE_PAGE')  ? "recipe-page display-flex" : "recipe-page display-none";

    return (
      <div className={showHideRecipePage}>
        <RecipeDetails
          show={this.props.page === 'RECIPE_PAGE'}
          name={this.props.recipe.name}
          time={this.props.recipe.time}
          brief={this.props.recipe.brief}
          ingredients={this.props.recipe.ingredients}
          directions={this.props.recipe.directions}
          notes={this.props.recipe.notes}
          goBack={this.props.hideRecipePage}
        />
        <RecipeGallery
          show={this.props.page === 'GALLERY_PAGE'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
    page: state.page.page
  };
}

export default connect(mapStateToProps)(RecipePage);