import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import store from './store';

import MainPage from './components/MainPage/MainPage';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipePage from './components/RecipePage/RecipePage';

export default class App extends React.Component {
  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({
      showModal: true
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainPage />
          <RecipePage />
          <Navbar />
          <Modal
            show={this.state.showModal}
            handleClose={this.hideModal}
          >
            <RecipeForm handleClose={this.hideModal}/>
          </Modal>

          <div className="add-recipe-btn" onClick={this.showModal}>
            <img src={require('../src/images/add.png')} alt="add" />
          </div>

        </div>
      </Provider>
    );
  }
}

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});
