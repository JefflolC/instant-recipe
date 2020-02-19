import React from 'react';

import './RecipeDescription.scss';

export default class RecipeDescription extends React.Component {
  render() {
    if(this.props.currentStep !== 1) {
      return null;
    }

    return (
      <div className="recipe-description">
        <div className="title">
          Add Recipe (1 of 2)
        </div>
        <div className="row">
          <div className="column">
            <div className="recipe-form__name">
              <label className="text">Recipe Name</label>
              <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange} maxLength={14}/>
            </div>
            <div className="recipe-form__time">
              <label className="text">Recipe Time</label>
              <div className="row">
                <input type="text" name="time" value={this.props.time} onChange={this.props.handleChange} maxLength={20}/>
                <div className="unit__text">hour(s)</div>
                <input type="number" name="time-minute" maxLength={20} disabled/>
                <div className="unit__text">minute(s)</div>
              </div>
            </div>
            <div className="recipe-form__brief">
              <label className="text">Recipe Description</label>
              <textarea rows="10" name="brief" value={this.props.brief} onChange={this.props.handleChange} maxLength={250}/>
            </div>
          </div>
          <div className="column">
            <div className="recipe-form__picture">
              <label className="text">Recipe Picture</label>
              <div className="display-picture">
                {/* <img src={require('../../images/ApplePie.jpg')} alt="Apple Pie" /> */}
              </div>
              <input type="file" name="pic" value={this.props.picture} onChange={this.props.fileSelectedHandler} accept="image/*" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}