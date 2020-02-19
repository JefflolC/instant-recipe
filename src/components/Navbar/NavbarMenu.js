import React from "react";
import "./NavbarMenu.scss";

export default class NavbarMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  toggleMenuDropdown = () => {
    this.setState((prevState) => { 
      // console.log(!prevState.visible);
      return {visible: !prevState.visible}
    });
  }

  render() {
    let show = this.state.visible ? "navbar-menu__dropdown expand" : "navbar-menu__dropdown collapse";

    return (
      <div className="navbar-menu">
        <div className="navbar-menu__hamburger" onClick={this.toggleMenuDropdown}></div>
        <div className={show}>
          <div className="navbar-menu__tab">My Favourites</div>
          <div className="navbar-menu__tab">My Cookbook</div>
          <div className="navbar-menu__tab">My Profile</div>
        </div>
      </div>
    );
  }
}