import React from "react";
import "./RecipeCard.scss";
import axios from 'axios';

import { connect } from "react-redux";

import Dropdown from '../Dropdown/Dropdown';
import { showGalleryPage } from '../../actions/pageActions';
import { setRecipeName, setRecipeTime, setRecipeBrief, setRecipeIngredients, setRecipeDirections, setRecipeNotes } from "../../actions/recipeActions";
import { showRecipePage } from "../../actions/pageActions";

// import fullStar from "../../images/star-full.png";
import emptyStar from "../../images/star-empty.png";
import options from "../../images/options.png";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          id: 0,
          title: 'Edit',
          selected: false,
          key: 'options'
        },
        {
          id: 1,
          title: 'Delete',
          selected: false,
          key: 'options'
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      options: [
        {
          id: 0,
          title: 'Edit',
          onClick: this.editRecipe,
          selected: false,
          key: 'options'
        },
        {
          id: 1,
          title: 'Delete',
          onClick: this.deleteRecipe,
          selected: false,
          key: 'options'
        }
      ]
    })
  }

  editRecipe = (event) => {
    console.log('[LOG] Editing ' + this.props.name);
    event.stopPropagation();
  }

  deleteRecipe = (event) => {
    console.log('[LOG] Deleting ' + this.props.name);

    // Replace space characters in recipe with %20
    let recipe = this.props.name;
    recipe = recipe.split(' ').join("%20");

    axios.delete('http://localhost:5000/recipes/' + recipe)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    event.stopPropagation();
  }

  showRecipe = () => {
    this.props.setRecipeName(this.props.name);
    this.props.setRecipeTime(this.props.time);
    this.props.setRecipeBrief(this.props.brief);
    this.props.setRecipeIngredients(this.props.ingredients);
    this.props.setRecipeDirections(this.props.directions);
    this.props.setRecipeNotes(this.props.notes);

    this.props.showRecipePage();
  }

  render() {
    return (
      <div className="recipe-card-container">
        <div className="recipe-card" onClick={this.showRecipe}>
        {/* <div className="recipe-card"> */}
          <div className="recipe-card__picture">
            <img src={this.props.src} alt={this.props.alt} />
          </div>
          <div className="recipe-card__content">
            <div className="content__name">{this.props.name}</div>
            <div className="content__time">{this.props.time}</div>
            {/* <div className="content__ingredients">{this.props.ingredients}</div> */}
            <div className="content__ingredients">{"3 Missing Ingredients"}</div>
          </div>
          <div className="recipe-card__favourite">
            <img src={emptyStar} alt="favourite" />
          </div>
          <div className="recipe-card__options">
            {/* <img src={options} alt="options" /> */}
            <Dropdown
              img={options}
              // title={"Options"}
              list={this.state.options}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showGalleryPage: () => {
      dispatch(showGalleryPage());
    },
    showRecipePage: () => {
      dispatch(showRecipePage());
    },
    setRecipeName: (name) => {
      dispatch(setRecipeName(name));
    },
    setRecipeTime: (time) => {
      dispatch(setRecipeTime(time));
    },
    setRecipeBrief: (brief) => {
      dispatch(setRecipeBrief(brief));
    },
    setRecipeIngredients: (ingredients) => {
      dispatch(setRecipeIngredients(ingredients));
    },
    setRecipeDirections: (directions) => {
      dispatch(setRecipeDirections(directions));
    },
    setRecipeNotes: (notes) => {
      dispatch(setRecipeNotes(notes));
    }
  };
};

export default connect(null, mapDispatchToProps)(RecipeCard);