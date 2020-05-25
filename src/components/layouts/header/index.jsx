import React from "react";
import "./_index.scss";
// ui
import { Layout, Row, Col, Drawer } from "antd";
// icons
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

class HeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, placement: "left" };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  render() {
    const { placement, visible } = this.state;

    return (
      <Header
        className="header-page"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="container">
          <div className="header-ctn">
            <Row gutter={24}>
              <Col lg={8} md={9} sm={0}>
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
              <Col lg={8} md={6} sm={6}>
                <div className="logo-main">
                  <a href="/">
                    <img src="./assets/images/icons/logo.svg" alt="" />
                  </a>
                </div>
              </Col>
              <Col lg={8} md={9} sm={0}>
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
              <Col md={0} sm={18}>
                <div className="barMobile">
                  <a
                    className="btn-menu-mb"
                    onClick={() => this.setState({ visible: true })}
                  >
                    <MenuOutlined />
                  </a>
                </div>

                <Drawer
                  title={
                    <div className="mb-log">
                      <a href="/">
                        <img src="./assets/images/icons/logo.svg" alt="" />
                      </a>
                    </div>
                  }
                  placement={placement}
                  closable={false}
                  onClose={this.onClose}
                  visible={visible}
                  key={placement}
                  className="popup-menu-mb"
                >
                  <ul className="navBar-mb">
                    <li className="navBar-item">
                      <a href="#">Lenses</a>
                    </li>
                    <li className="navBar-item">
                      <a href="#">Eyewears</a>
                    </li>
                    <li className="navBar-item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="navBar-item">
                      <a href="#">Search</a>
                    </li>
                    <li className="navBar-item">
                      <a href="#">Cart</a>
                    </li>
                    <li className="navBar-item">
                      <a href="#">Account</a>
                    </li>
                  </ul>
                </Drawer>
              </Col>
            </Row>
          </div>
        </div>
      </Header>
    );
  }
}

export default HeaderPage;
