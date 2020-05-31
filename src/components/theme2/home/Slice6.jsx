import React from "react";
import "./_slice-item.scss";
import "./_slice2.scss";
import { Button } from "antd";
import { URL_MEDIA } from "../../../config";
// components
import HeaderSlice from "./HeaderSlice";

class Slice6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="slice-item slice2">
        <div className="sub-top">
          <HeaderSlice />

          <div className="sub-top-ctn bg3">
            <div className="container-fluid">
              <div className="ctn">
                <h2>Lacelle Circle Color Contact Lens</h2>
                <div className="actions">
                  <Button className="btn-shop-now">Shop now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-bottom bg-white">
          <div className="ctn-main">
            <div className="ctn-img">
              <img src={`${URL_MEDIA}assets/images/theme2/s6.png`} alt="" />
            </div>
          </div>

          <div className="container-fluid">
            <div className="contain">
              <h4>Contains 2 Lens Per Box</h4>
              <h4>Rs 600.00</h4>
            </div>
          </div>

          <div className="actions-page">
            <a onClick={() => this.props.onScrollTo("next")}>Next</a>
            <a onClick={() => this.props.onScrollTo("prev")}>Prev</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slice6;
