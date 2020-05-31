import React from "react";
import { URL_MEDIA } from "../../../config";
import "./_main-slice.scss";
// components
import HeaderSlice from "./HeaderSlice";

class MainSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-slice">
        <div className="main-top">
          <HeaderSlice />

          <div className="slice-ctn">
            <div className="container-fluid">
              <div className="ctn">
                <h1>BRAND CONTACT LENSES</h1>
                <div className="actions">
                  <a href="">ALL BRANDS</a>
                  <a href="">ALL LENSES</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slice-ft main-bot">
          <div className="container-fluid">
            <div className="ctn">
              <div className="ctn-img">
                <img
                  src={`${URL_MEDIA}assets/images/theme2/soflens.png`}
                  alt=""
                />
              </div>
              <div className="scroll-to">
                <a onClick={() => this.props.onScrollTo("next")}>
                  SCROLL TO SHOP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSlice;
