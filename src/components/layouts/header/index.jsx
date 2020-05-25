import React from "react";
import "./_index.scss";
// ui
import { Layout, Row, Col } from "antd";
const { Header } = Layout;

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
                <ul className="nav-header nav-left">
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
                <ul className="nav-header nav-right">
                  <li>
                    <a href="/">
                      <img
                        className="nav-icon"
                        src="./assets/images/icons/search.png"
                        alt=""
                      />{" "}
                      Search
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        className="nav-icon"
                        src="./assets/images/icons/shopping-bag.png"
                        alt=""
                      />{" "}
                      Cart
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        className="nav-icon"
                        src="./assets/images/icons/user.png"
                        alt=""
                      />{" "}
                      Account
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
