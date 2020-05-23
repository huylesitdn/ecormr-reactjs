import React from "react";
import "./_buy-colors.scss";
// ui
import { Row, Col } from "antd";

class BuyColors extends React.Component {
  render() {
    return (
      <div className="buy-colors">
        <div className="container">
          <div className="colors-ctn">
            <Row gutter={24}>
              <Col md={12}>
                <div className="info">
                  <h4>BUY COLOR CONTACT LENSES</h4>
                  <h2>DESIGNED WITH YOUR TOTAL EYEWEAR EXPERIENCE IN MIND</h2>
                </div>
              </Col>
              <Col md={12}>
                <div className="img-colors">
                  <img src="./assets/images/colors.png" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyColors;