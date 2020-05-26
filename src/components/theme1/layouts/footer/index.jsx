import React from "react";
import "./_index.scss";
import { URL_MEDIA } from '../../../../config'
// ui
import { Layout, Row, Col, Badge } from "antd";
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
              <Col md={12} xs={24}>
                <div className="ft-left">
                  <div className="ft-logo">
                    <a href="/">
                      <img src={`${URL_MEDIA}assets/images/icons/logo.svg`} alt="ft-logo" />
                    </a>
                  </div>
                  <ul className="ft-info">
                    <li>
                      <p>
                        <EnvironmentOutlined />
                        2616 Monroe Street Houston , TX 77702
                      </p>
                    </li>
                    <li>
                      <p>
                        <MailOutlined />
                        Test@email.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <PhoneOutlined />
                        9993333999
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} sm={8} xs={8}>
                <div className="ft-right">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="/">Some Dummy</a>
                    </li>
                    <li>
                      <a href="/">Gift Sets</a>
                    </li>
                    <li>
                      <a href="/">Lens Finder</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} sm={8} xs={8}>
                <div className="ft-right">
                  <h3>Our Story</h3>
                  <ul>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Our Blog</a>
                    </li>
                    <li>
                      <a href="/">Our Gallery</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} sm={8} xs={8}>
                <div className="ft-right">
                  <h3>Help</h3>
                  <ul>
                    <li>
                      <a href="/">Help Center</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">FAQs</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="ft-bottom">
            <Row gutter={24}>
              <Col xl={16} lg={17} xs={24}>
                <ul className="bar-ft">
                  <li>
                    <a href="/">Copyright ©2020 All rights reserved </a>
                  </li>
                  <li>
                    <a href="/">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                </ul>
              </Col>
              <Col xl={8} lg={7} xs={24}>
                <div className="view-payments">
                  <img src={`${URL_MEDIA}assets/images/cards.png`} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="actions-pages">
          <div className="action-messages">
            <img src={`${URL_MEDIA}assets/images/icons/messages.png`} alt="" />
          </div>

          <div className="action-cart">
            <Badge
              count={3}
              style={{
                background: "#FF8F40",
              }}
            >
              <img src={`${URL_MEDIA}assets/images/icons/cart.png`} alt="" />
            </Badge>
          </div>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
