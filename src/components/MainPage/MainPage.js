import React from 'react';
import './MainPage.scss';

import axios from 'axios';
import { connect } from 'react-redux';

import { setRecipeGallery } from '../../actions/recipeGalleryActions';
import { setRecipeName, setRecipeTime, setRecipeBrief, setRecipeIngredients, setRecipeDirections, setRecipeNotes } from "../../actions/recipeActions";
import { showGalleryPage } from '../../actions/pageActions';
import { showRecipePage } from "../../actions/pageActions";

import searchIcon from "../../images/search.png";


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  onSubmit = (e) => {   
    if(e.key === 'Enter' || e.button === 0) {
      console.log('[LOG] Searching for ' + this.state.query);

      axios.get('http://localhost:5000/recipes/' + this.state.query)
        .then((res) => {
          console.log('[LOG] Found ', res.data);

          this.props.setRecipeGallery(res.data);
          this.props.showGalleryPage();
        })
        .catch((error) => {
          console.log(error);
        });


      e.preventDefault();
    }
  }

  updateQuery = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  handleClick = (e) => {
    e.preventDefault();
  }

  /* FOR TESTING PURPOSES */
  showDetails = () => {
    this.props.setRecipeName("Apple Pie");
    this.props.setRecipeTime("1 hour 30 minutes");
    this.props.setRecipeBrief("This is a sweet, tart and delicious apple pie. Guaranteed to please. Be sure to use Granny Smith apples since they work the best.");
    this.props.setRecipeIngredients("test");
    this.props.setRecipeDirections("test");
    this.props.setRecipeNotes("test");

    this.props.showRecipePage();
  }

  render() {
    const showHideMainPage = this.props.page === 'MAIN_PAGE' ? "main-page display-flex" : "main-page display-none";

    return (
      <div className={showHideMainPage}>
        <div className="background" />
        <div className="search">
          <form className="search-form">
            <img className="search-form__img" src={searchIcon} alt="search" />
            <input className="search-form__input" type="text" name="search" value={this.state.query} placeholder="Search for your own recipe" onChange={(e) => this.updateQuery(e)} onKeyDown={this.onSubmit} />
          </form>
          <div className="search-buttons">
            <button className="search-buttons__search" onClick={this.onSubmit}>Search</button>
            <button className="search-buttons__filter" onClick={this.handleClick}>Filter</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mainPage: state.page.showMainPage,
    page: state.page.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipeGallery: (recipes) => {
      dispatch(setRecipeGallery(recipes));
    },
    showGalleryPage: () => {
      dispatch(showGalleryPage());
    },

    /* FOR TESTING PURPOSES */
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
