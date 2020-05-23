import React from "react";
import "./_index.scss";
// ui
import { Layout, Row, Col } from "antd";
// icons
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser
} from "react-icons/ai";

const { Header,  } = Layout;

class HeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header
        className="header-page"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="container">
          <div className="header-ctn">
            <Row gutter={24}>
              <Col md={8}>
                <ul className="nav-header">
                  <li>
                    <a href="/">Lenses</a>
                  </li>
                  <li>
                    <a href="/">Eyewears</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                </ul>
              </Col>
              <Col md={8}>
                <div className="logo-main">
                  <a href="/">
                    <img src="./assets/images/icons/logo.svg" alt="" />
                  </a>
                </div>
              </Col>
              <Col md={8}>
                <ul className="nav-header">
                  <li>
                    <a href="/">
                      <AiOutlineSearch /> Search
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiOutlineShoppingCart /> Cart
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiOutlineUser /> Account
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </Header>
    );
  }
}

export default HeaderPage;
