import React from 'react';
import axios from 'axios';
import './RecipeForm.scss';
import { sampleRecipeNames, sampleRecipeTimes, sampleRecipeBriefs, sampleRecipeIngredients, sampleRecipeDirections, sampleRecipeNotes } from '../../data/sampleRecipe';

import RecipeDescription from '../RecipeForm/RecipeDescription';
import RecipeNotes from '../RecipeForm/RecipeNotes';

export default class RecipeForm extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      currentStep: 1,
      picture: '',
      name: '',
      time: '',
      brief: '',
      ingredients: '',
      directions: '',
      notes: '',
		};
  }

  fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);

    this.setState({
      picture: e.target.files[0]
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const { picture, name, time, brief, ingredients, directions, notes } = this.state;
    const { name, time, brief, ingredients, directions } = this.state;


    if(name === '' || time === '' || brief === '' || ingredients === '' || directions === '') {
      alert('Please make sure you fill in every field (not including the picture).');
      return;
    }

    /* DEBUGGING PURPOSE */
    // alert(`Your registration detail: \n 
    //   Picture: ${picture} \n 
    //   Name: ${name} \n
    //   Time: ${time} \n
    //   Brief: ${brief} \n
    //   Ingredients: ${ingredients} \n
    //   Directions: ${directions} \n
    //   Notes: ${notes}`);

		const recipe = {
      picture: this.state.picture,
			name: this.state.name,
      time: this.state.time,
      brief: this.state.brief,      
      ingredients: this.state.ingredients,
      directions: this.state.directions,
      notes: this.state.notes,
    };

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/add', recipe)
      .then(res => console.log(res.data));

      this.setState({
        currentStep: 1,
        picture: '',
        name: '',
        time: '',
        brief: '',
        ingredients: '',
        directions: '',
        notes: ''
      });

    this.props.handleClose();
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  autofill = () => {
    this.setState({
      name: this.generateRandomItem(sampleRecipeNames),
      time: this.generateRandomItem(sampleRecipeTimes),
      brief: this.generateRandomItem(sampleRecipeBriefs),
      ingredients: this.generateRandomItem(sampleRecipeIngredients),
      directions: this.generateRandomItem(sampleRecipeDirections),
      notes: this.generateRandomItem(sampleRecipeNotes),
    });
  }

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
  }

  generateRandomItem = (items) => {
    if (items === sampleRecipeIngredients) {
      let sampleIngredients = [...sampleRecipeIngredients];
      let recipeIngredients = '';
      const numIngredients = this.generateRandomNumber(5, 10);

      let rand;

      for(let i = 0; i < numIngredients; i++) {
        rand = this.generateRandomNumber(0, sampleIngredients.length - 1);

        recipeIngredients += '- '
        recipeIngredients += sampleIngredients[rand];
        recipeIngredients += '\n'
  
        sampleIngredients.splice(rand, 1);
      }

      return recipeIngredients;
    }
    else if (items === sampleRecipeDirections) {
      let sampleDirections = [...sampleRecipeDirections];
      let recipeDirections = '';
      const numDirections = this.generateRandomNumber(3, 7);

      let rand;

      for(let i = 0; i < numDirections; i++) {
        rand = this.generateRandomNumber(0, sampleDirections.length - 1);

        recipeDirections += '- '
        recipeDirections += sampleDirections[rand];
        recipeDirections += '\n'
  
        sampleDirections.splice(rand, 1);
      }

      return recipeDirections;
    }
    else {
      // const min = 0;
      // const max = Math.floor(items.length) - 1;
      // const rand = Math.floor(Math.random() * (max - min + 1) + min);
      const rand = this.generateRandomNumber(0, items.length - 1)

      return items[rand];
    }
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !== 1) {
      return (
        <button 
          className="prev-btn" 
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }

    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep < 2) {
      return (
        <button 
          className="next-btn" 
          type="button" 
          onClick={this._next}
        >
          Next
        </button>        
      );
    }

    return null;
  }

  get submitButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !== 1) {
      return (
        <button 
          className="submit-btn" 
          type="button"
          onClick={this.handleSubmit}
        >
          Add
        </button>        
      );
    }

    return null;
  }

  get autofillButton(){
    return (
      <button 
        className="autofill-btn" 
        type="button"
        onClick={this.autofill}
      >
        Autofill
      </button>        
    );
  }

  render() {
    return (
      <div className="recipe-form">
        <form>
          <RecipeDescription
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            fileSelectedHandler={this.fileSelectedHandler}
            picture={this.state.picture}
            name={this.state.name}
            time={this.state.time}
            brief={this.state.brief}
          />
          <RecipeNotes
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            ingredients={this.state.ingredients}
            directions={this.state.directions}
            notes={this.state.notes}
          />
        </form>
        <div className="buttons">
          {this.previousButton}
          {this.nextButton}
          {this.submitButton}
          {this.autofillButton}
        </div>
      </div>
    );
  }
}