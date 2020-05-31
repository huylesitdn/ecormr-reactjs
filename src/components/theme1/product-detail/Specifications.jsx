import React from "react";
import "./_description.scss";
import { Row, Col } from "antd";

class Specifications extends React.Component {
  render() {
    return (
      <div className="tab-content">
        <h3>Specifications</h3>
        <h6>Prescription</h6>
        <div className="prescription">
          <Row gutter={48}>
            <Col md={12} xs={24}>
              <div className="pre-item">
                <Row gutter={0}>
                  <Col xs={12}>
                    <h4 className="pre-title">BASE CURVE</h4>
                  </Col>
                  <Col xs={12}>
                    <p className="txt">8.6</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="pre-item">
                <Row gutter={0}>
                  <Col xs={12}>
                    <h4 className="pre-title">Water Content</h4>
                  </Col>
                  <Col xs={12}>
                    <p className="txt">36% H2O</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="pre-item">
                <Row gutter={0}>
                  <Col xs={12}>
                    <h4 className="pre-title">Diameter</h4>
                  </Col>
                  <Col xs={12}>
                    <p className="txt">14.00 MM</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="pre-item">
                <Row gutter={0}>
                  <Col xs={12}>
                    <h4 className="pre-title">Type</h4>
                  </Col>
                  <Col xs={12}>
                    <p className="txt">Monthly Disposable</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="pre-item">
                <Row gutter={0}>
                  <Col xs={12}>
                    <h4 className="pre-title">Material Content</h4>
                  </Col>
                  <Col xs={12}>
                    <p className="txt">64% Polymer (balafilcon A)</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="pre-item">
                <Row gutter={0}>
                  <Col xs={12}>
                    <h4 className="pre-title">Contains</h4>
                  </Col>
                  <Col xs={12}>
                    <p className="txt">6 Lenses per Box</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Specifications;
