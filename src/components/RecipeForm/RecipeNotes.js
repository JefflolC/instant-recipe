import React from 'react';

import './RecipeNotes.scss';

export default class RecipeNotes extends React.Component {
  render() {
    if(this.props.currentStep !== 2) {
      return null;
    }

    const ingredientsPlaceholder = "Please type ingredients in the following format: \n- 3/4 cup white sugar\n- 2 tbsp all-purpose flour\n- 1/2 tsp ground cinnamon\n...";
    const directionsPlaceholder = "Please type directions in the following format: \n- Preheat oven to 425 degrees F (220 degrees C).\n- Mix together the sugar, flour, cinnamon, nutmeg and lemon peel.\n...";
    const notesPlaceholder = "Please type directions in the following format: \n- 1/8 cup = 2 tablespoons.\n- Chicken broth can be substitube for vegetable broth.\n...";

    return (
      <div className="recipe-notes">
        <div className="title">
          Add Recipe (2 of 2)
        </div>
        <div className="recipe-form__ingredients">
          <label className="text">Recipe Ingredients</label>
          <textarea rows="5" name="ingredients" value={this.props.ingredients} onChange={this.props.handleChange} placeholder={ingredientsPlaceholder}/>
        </div>     
        <div className="recipe-form__directions">
          <label className="text">Recipe Direction</label>
          <textarea rows="5" name="directions" value={this.props.directions} onChange={this.props.handleChange} placeholder={directionsPlaceholder}/>
        </div>     
        <div className="recipe-form__notes">
          <label className="text">Extra Notes</label>
          <textarea rows="5" name="notes" value={this.props.notes} onChange={this.props.handleChange} placeholder={notesPlaceholder}/>
        </div>         
      </div>
    );
  }
}