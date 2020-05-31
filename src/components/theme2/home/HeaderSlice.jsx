import React from "react";
import "./_header.scss";
// icons
import { BsSearch, BsBag, BsPerson } from "react-icons/bs";

class HeaderSlice extends React.Component {
  render() {
    return (
      <div className="header">
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
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSlice;
