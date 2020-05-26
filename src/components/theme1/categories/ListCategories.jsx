import React from "react";
import './_navbar.scss';

class ListCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-categories">
        <div className="container">
          <ul className="navbar">
            <li className="navbar-item active">
              <a href="/">focus</a>
            </li>
            <li className="navbar-item">
              <a href="/">color</a>
            </li>
            <li className="navbar-item">
              <a href="/">vial</a>
            </li>
            <li className="navbar-item">
              <a href="/">disposable</a>
            </li>
            <li className="navbar-item">
              <a href="/">toric</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListCategories;
