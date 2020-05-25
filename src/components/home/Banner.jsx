import React from "react";
import "./_banner.scss";
// ui
import { Row, Col, Button } from "antd";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-banner">
        <Row gutter={0}>
          <Col lg={18} xl={19} md={16}>
            <div className="welcome">
              <div className="welcome-ctn">
                <h4>Welcome</h4>
                <h2>THE CONTACT LENS STORE</h2>
                <Button>Find out more</Button>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={5} md={8}>
            <div className="options">
              <div className="option-item">
                <img
                  className="img-title"
                  src="./assets/images/icons/discount.png"
                  alt=""
                />
                <h3>Best Prces & offers</h3>
                <p>
                  Lorem Ipsum is simply dummy text of theprinting and
                  typesetting industry
                </p>
              </div>
              <div className="option-item">
                <img
                  className="img-title"
                  src="./assets/images/icons/bus.png"
                  alt=""
                />
                <h3>Fast Delivery on time</h3>
                <p>
                  Lorem Ipsum is simply dummy text of theprinting and
                  typesetting industry
                </p>
              </div>
              <div className="option-item">
                <img
                  className="img-title"
                  src="./assets/images/icons/reload.png"
                  alt=""
                />
                <h3>Easy return </h3>
                <p>
                  Lorem Ipsum is simply dummy text of theprinting and
                  typesetting industry
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
