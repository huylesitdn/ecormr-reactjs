import React from "react";
import "./_partners.scss";
// ui
import { Row, Col, Button } from "antd";

class Partners extends React.Component {
  render() {
    return (
      <div className="partners">
        <div className="partners-top">
          <div className="container">
            <div className="partners-title">
              <h2 className="text">Partners</h2>
              <h1>Popular Brands</h1>
            </div>
            <Row gutter={30}>
              <Col md={8} xs={24}>
                <div className="partner-item air-optix">
                  <div className="item-ctn">
                    <h2>Air Optix</h2>
                    <p>Breathable Contact Lenses</p>
                    <Button>Shop Now</Button>
                  </div>
                </div>
              </Col>
              <Col md={8} xs={24}>
                <div className="partner-item fresh-look">
                  <div className="item-ctn">
                    <h2>Fresh Look</h2>
                    <p>One-Day Color Contact Lenses</p>
                    <Button>Shop Now</Button>
                  </div>
                </div>
              </Col>
              <Col md={8} xs={24}>
                <div className="partner-item easy-fit">
                  <div className="item-ctn">
                    <h2>Easy Fit</h2>
                    <p>Scleral Lens For Normal Eyes</p>
                    <Button>Shop Now</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="partners-bottom"></div>
      </div>
    );
  }
}

export default Partners;
