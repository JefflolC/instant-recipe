import React from "react";
import "./Dropdown.scss";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      headerImg: this.props.img
    }
  }

  handleClickOutside = (event) => {
    this.setState({ listOpen: false });
    event.stopPropagation();
  }

  toggleList = (event) => {
    this.setState(prevState => ({ listOpen: !prevState.listOpen }));
    event.stopPropagation();
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={this.toggleList}>
          {this.props.title && <div className="dropdown__header-title">{this.state.headerTitle}</div>}
          {this.props.img && <img className="dropdown__header-title" src={this.state.headerImg} alt={"Options"} />}
        </div>
        { this.state.listOpen && <div className="dropdown__backdrop" onClick={this.handleClickOutside}></div> }
        {
          this.state.listOpen && <ul className="dropdown__list">
            {this.props.list.map((item) => (
              <li key={item.id} className="dropdown__list-item" onClick={(e) => {this.toggleList(e); item.onClick(e);}}>{item.title}</li>
            ))}
          </ul>        
        }
      </div>
    );
  }
}