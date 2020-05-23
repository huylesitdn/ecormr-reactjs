import React from "react";
// ui
import { Layout, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";

const { Footer } = Layout;

class FooterPage extends React.Component {
  render() {
    return (
      <Footer className="footer-page">
        <div className="container">
          <div className="ft-top">
            <Row gutter={24}>
              <Col md={12}>
                <div className="ft-left">
                  <div className="ft-logo">
                    <a href="/">
                      <img src="./assets/images/icons/logo.svg" alt="ft-logo" />
                    </a>
                  </div>
                  <ul className="ft-info">
                    <li>
                      <EnvironmentOutlined />
                      2616 Monroe Street Houston , TX 77702
                    </li>
                    <li>
                      <MailOutlined />
                      Test@email.com
                    </li>
                    <li>
                      <PhoneOutlined />
                      9993333999
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div classNam="ft-right">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Some Dummy</a>
                    </li>
                    <li>
                      <a href="#">Gift Sets</a>
                    </li>
                    <li>
                      <a href="#">Lens Finder</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div classNam="ft-right">
                  <h3>Our Story</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Blog</a>
                    </li>
                    <li>
                      <a href="#">Our Gallery</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div classNam="ft-right">
                  <h3>Help</h3>
                  <ul>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
