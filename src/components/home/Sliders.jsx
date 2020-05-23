import React from "react";
import "./_slider.scss";
// ui
import { Carousel, Row, Col } from "antd";

class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.slRef = React.createRef();
  }

  handleNext = () => {
    this.slRef.current.slick.slickNext()
  }

  handlePrev = () => {
    this.slRef.current.slick.slickPrev()
  }

  render() {
    return (
      <div className="silder-page">
        <div className="container">
          <div className="action-prev" onClick={() => this.handlePrev()}>
            <img src="./assets/images/icons/left.png" alt="" />
          </div>
          <div className="action-next" onClick={() => this.handleNext()}>
            <img src="./assets/images/icons/right.png" alt="" />
          </div>
          <Carousel
            autoplay
            className="slider-home"
            ref={this.slRef}
          >
            <div className="slider-item">
              <Row gutter={24}>
                <Col md={4}>
                  <img src="./assets/images/slider/s1.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s2.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s3.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s4.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s5.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s6.png" alt="" />
                </Col>
              </Row>
            </div>
            <div className="slider-item">
              <Row gutter={24}>
                <Col md={4}>
                  <img src="./assets/images/slider/s1.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s2.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s3.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s4.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s5.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s6.png" alt="" />
                </Col>
              </Row>
            </div>
            <div className="slider-item">
              <Row gutter={24}>
                <Col md={4}>
                  <img src="./assets/images/slider/s1.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s2.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s3.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s4.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s5.png" alt="" />
                </Col>

                <Col md={4}>
                  <img src="./assets/images/slider/s6.png" alt="" />
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Sliders;
