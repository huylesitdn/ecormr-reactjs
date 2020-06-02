import React from "react";
import "./_header.scss";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
// icons
import { BsSearch, BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
// ui
import { Drawer } from "antd";

class HeaderSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      placement: "left"
    };
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

  render() {
    const { offsetIndex } = this.props;
    const { placement, visible } = this.state;

    return (
      <div className={`${offsetIndex === 0 ? "colorDark" : ""} header`}>
        <div className="container-fluid">
          <div className="hd-top sc-desktop">
            <ul>
              <li>
                <BsSearch />
                <a href="">Search</a>
              </li>
              <li>
                <BsBag />
                <a href="">Card</a>
              </li>
              <li>
                <BsPerson />
                <a href="">Account</a>
              </li>
            </ul>
          </div>
          <div className="hd-bot sc-desktop">
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">about us</a>
              </li>
              <li>
                <a href="">SHOP</a>
              </li>
              <li>
                <a href="">BRAND</a>
              </li>
              <li>
                <a href="">LENS TYPE</a>
              </li>
              <li>
                <a href="">ACESSORIES</a>
              </li>
            </ul>
          </div>

          <div className="hd-mobile sc-mobile">
            <a href="#" className="navbar-menu" onClick={this.showDrawer}>
              <AiOutlineMenu />
            </a>

            <div className="bar-right">
              <a href="#">
                <BsSearch /> <span className="text">Search</span>
              </a>
              <a href="#">
                <BsBag /> <span className="text">Card</span>
              </a>
              <a href="#">
                <BsPerson /> <span className="text">Account</span>
              </a>
            </div>
          </div>

          <Drawer
            title="MENU"
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={visible}
            key={placement}
            className="sc-mobile"
          >
            <ul className="list-menu-mb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Brand</a>
              </li>
              <li>
                <a href="#">Lens type</a>
              </li>
              <li>
                <a href="#">ACESSORIES</a>
              </li>
            </ul>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default HeaderSlice;
