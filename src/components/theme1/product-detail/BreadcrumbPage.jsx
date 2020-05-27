import React from "react";
import "./_breadcrumb.scss";
// ui
import { Breadcrumb } from "antd";
// icons 
import { RightOutlined } from "@ant-design/icons";

class BreadcrumbPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="breadcrumb-page">
        <div className="container">
          <Breadcrumb separator={<RightOutlined />}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Products</Breadcrumb.Item>
            <Breadcrumb.Item href="">
              PureVision Multifocal Contact Lenses
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}

export default BreadcrumbPage;
