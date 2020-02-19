import React from 'react';
import './RecipeGallery.scss';

import { connect } from 'react-redux';

import RecipeCard from '../RecipeCard/RecipeCard';

class RecipeGallery extends React.Component {
  getRecipeCards = (data) => {
    let cards = data.map(recipe => {
      return (
        <RecipeCard
          key={recipe.name}
          src={require('../../images/ApplePie.jpg')}
          alt={"Apple"}
          name={recipe.name}
          time={recipe.time}
          brief={recipe.brief}
          ingredients={recipe.ingredients}
          directions={recipe.directions}
          notes={recipe.notes}
        />
      );
    });

    return cards;
  }

  render() {
    const showHideGallery = this.props.show ? "recipe-gallery display-block" : "recipe-gallery display-none";
    let recipeGallery = this.getRecipeCards(this.props.recipeGallery.recipes);

    return (
      <div className={showHideGallery}>
        {recipeGallery}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipeGallery: state.recipeGallery
  };
}

export default connect(mapStateToProps)(RecipeGallery);