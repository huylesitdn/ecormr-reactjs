import React from "react";
import "./_daily-disposable.scss";
// ui
import { Row, Col } from "antd";

class DailyDisposable extends React.Component {
  render() {
    return (
      <div className="daily-disposable">
        <Row gutter={0}>
          <Col md={12}>
            <div className="daily-img">
              <img src="./assets/images/daily.png" alt="daily" />
            </div>
          </Col>
          <Col md={12}>
            <div className="daily-ctn">
              <h4>DAILY DISPOSABLE</h4>
              <h2>DESIGNED WITH YOUR TOTAL EYEWEAR EXPERIENCE IN MIND</h2>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DailyDisposable;
