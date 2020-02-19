import React from 'react';
import './RecipeDetails.scss';

import { connect } from 'react-redux';

import { showGalleryPage } from '../../actions/pageActions';

class RecipeDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 'DIRECTIONS',
    };
    // this.myRef = React.createRef();
  };

  componentDidUpdate() {
    // this.myRef.current.scrollIntoView();
    // window.scrollTo(0, 0);
  }


  switchTab = () => {
    if(this.state.currentTab === 'DIRECTIONS') {
      this.setState({
        currentTab: 'NOTES'
      });
    }
    else if(this.state.currentTab === 'NOTES') {
      this.setState({
        currentTab: 'DIRECTIONS'
      });
    }
  }

  showDirectionsTab = () => {
    if(this.state.currentTab === 'DIRECTIONS')
      return 'directions display-block';
    return 'directions display-none';
  }

  showNotesTab = () => {
    if(this.state.currentTab === 'NOTES')
      return 'notes display-block';
    return 'notes display-none';
  }

  changeDirectionsTabColor = () => {
    if(this.state.currentTab === 'DIRECTIONS')
      return 'directions-tab active';
    return 'directions-tab';
  }

  changeNotesTabColor = () => {
    if(this.state.currentTab === 'NOTES')
      return 'notes-tab active';
    return 'notes-tab';
  }

  formatIntoList = (data) => {
    if(data === undefined) return null;    

    // console.log("Original: " + data);
    let removeHyphens = data.replace(/-/g, "");
    let arrayOfLines = removeHyphens.match(/[^\r\n]+/g);
    
    if(arrayOfLines === null) return null;
    // console.log("Formatted: " + arrayOfLines);

    let list = arrayOfLines.map(str => {
      return <li key={str}>{str}</li>;
    });

    return list;
  }

  render() {
    const showHideDetailPage= this.props.show ? "recipe-details display-block" : "recipe-details display-none";
    const showHideDirections = this.showDirectionsTab();
    const showHideNotes = this.showNotesTab();
    const directionsTabColor = this.changeDirectionsTabColor();
    const notesTabColor = this.changeNotesTabColor();

    const ingredientsList = this.formatIntoList(this.props.ingredients);
    const directionsList = this.formatIntoList(this.props.directions);
    const notesList = this.formatIntoList(this.props.notes);

    return (
      // <div className={showHideDetailPage} ref={this.myRef}>
      <div className={showHideDetailPage}>
        <div className="row">
          <div className="column-fix column">
            <button className="back-btn" onClick={this.props.showGalleryPage}>Back</button>
            <div className="recipe-details__picture">
              <img src={require('../../images/ApplePie.jpg')} alt={"Apple Pie"}/>
            </div>
          </div>
          <div className="column">
            <div className="recipe-details__description">
              <div className="name">{this.props.name}</div>
              <div className="time">{this.props.time}</div>
              <div className="brief">"{this.props.brief}"</div>        
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="recipe-details__ingredients">
              <div className="header">Ingredients</div>
              <ul className="ingredients">
                {ingredientsList}
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="recipe-details__directions">
              <div className="tabs">
                <div className={directionsTabColor} onClick={this.switchTab}>How to make it</div>
                <div className={notesTabColor} onClick={this.switchTab}>Extra Notes</div>
              </div>
              <ol className={showHideDirections}>
                {directionsList}
              </ol>
              <ul className={showHideNotes}>
                {notesList}
              </ul>
            </div>
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
  };
}

export default connect(null, mapDispatchToProps)(RecipeDetails);