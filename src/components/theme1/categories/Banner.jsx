import React from "react";
import "./_banner.scss";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="banner-categories">
        <div className="container">
          <div className="banner-ctn">
            <h4>Categories</h4>
            <h2>A WIDE RANGE OF CONTACT LENSES</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
