import React from "react";
import "./Navbar.scss";

import axios from 'axios';
import { connect } from 'react-redux';

import NavbarMenu from "./NavbarMenu";

import { setRecipeGallery } from '../../actions/recipeGalleryActions';
import { showGalleryPage } from '../../actions/pageActions';

import settingsIcon from "../../images/settings.png";
import searchIcon from "../../images/search.png";
import avatar from "../../images/avatar.jpg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  onSubmit = (e) => {   
    if(e.key === 'Enter' || e.button === 0) {
      console.log('Searching for ' + this.state.query);

      axios.get('http://localhost:5000/recipes/' + this.state.query)
        .then((res) => {
          console.log(res.data)

          this.props.setRecipeGallery(res.data);
          // this.props.hideMainPage();
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

  render() {
    const showHideNavbarBackground = this.props.page !== 'MAIN_PAGE' ? "navbar background-white" : "navbar background-transparent";
    const showHideSearchBar = this.props.page !== 'MAIN_PAGE' ? "search display-flex" : "search display-none";

    return (
      <div className={showHideNavbarBackground}>
        <div className={showHideSearchBar}>
          <div className="search-filter">
            <img src={settingsIcon} alt="filter" />
          </div>
          <form className="search-form">
            <div className="search-form__search" onClick={this.onSubmit}>
              <img src={searchIcon} alt="search" />
            </div>
            <input className="search-form__input" type="text" name="search" value={this.state.query} placeholder="Search Recipe" onChange={(e) => this.updateQuery(e)} onKeyDown={this.onSubmit} />
          </form>
        </div>
        <div className="tabs">
          <div className="tabs__favorite">My Favourites</div>
          <div className="tabs__cookbook">My Cookbook</div>
          <div className="tabs__profile">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="dropdown">
          <NavbarMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);