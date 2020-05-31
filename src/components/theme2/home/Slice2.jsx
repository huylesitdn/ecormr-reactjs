import React from "react";
import "./_slice-item.scss";
import "./_slice2.scss";
import { Button } from "antd";
import { URL_MEDIA } from "../../../config";
// components 
import HeaderSlice from './HeaderSlice';

class Slice2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="slice-item slice2">
        <div className="sub-top">
          <HeaderSlice />

          <div className="sub-top-ctn">
            <div className="container-fluid">
              <div className="ctn">
                <h2>Soflens 59 Monthly Disposable Contact Lenses</h2>
                <div className="actions">
                  <Button className="btn-shop-now">Shop now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-bottom">
          <div className="ctn-main">
            <div className="ctn-img">
              <img
                src={`${URL_MEDIA}assets/images/theme2/soflens-full.png`}
                alt=""
              />
            </div>
          </div>

          <div className="container-fluid">
            <div className="contain">
              <h4>Contains 6 Lenses Per Box</h4>
              <h4>Rs 799.00</h4>
            </div>
          </div>

          <div className='actions-page'>
            <a onClick={() => this.props.onScrollTo('next')}>Next</a>
            <a onClick={() => this.props.onScrollTo('prev')}>Prev</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slice2;