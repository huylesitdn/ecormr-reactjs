import React from "react";
import "./_header.scss";
// icons
import { BsSearch, BsBag, BsPerson } from "react-icons/bs";

class HeaderSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { offsetIndex } = this.props;

    return (
      <div className={`${offsetIndex === 0 ? "colorDark" : ""} header`}>
        <div className="container-fluid">
          <div className="hd-top">
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
          <div className="hd-bot">
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
        </div>
      </div>
    );
  }
}

export default HeaderSlice;
