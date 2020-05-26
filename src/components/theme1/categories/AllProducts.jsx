import React from "react";
import "./_all-products.scss";
// components
import ProductItem from "../common/product-item";
// ui
import { Row, Col, Button, Pagination } from "antd";
// icons
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a><LeftOutlined /> PREV</a>;
    }
    if (type === "next") {
      return <a>Next <RightOutlined /></a>;
    }
    return originalElement;
  }

  renderProducts = () => {
    let results = [];
    for (let i = 0; i < 16; i++) {
      results.push(
        <Col md={6} key={i}>
          <ProductItem />
        </Col>
      );
    }

    return results;
  };

  render() {
    return (
      <div className="all-products">
        <div className="container">
          <div className="content-category">
            <Row gutter={24}>
              <Col md={6}>
                <div className="ctn-title">
                  <h3>FOCUS</h3>
                </div>
              </Col>
              <Col md={18}>
                <div className="ctn-description">
                  <p>
                    Our company supplies all well-known brands of lenses and you
                    can easily order any type of the eye lenses right now. Our
                    customers may choose from a complete list of contact lens
                    products from leading manufacturers, custom lenses and eye
                    care essentials
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="sub-categories">
            <h3>SubCategories</h3>

            <div className="options">
              <Button>+0.25</Button>
              <Button>+0.50</Button>
              <Button type="primary">+0.75</Button>
              <Button>+1.00</Button>
              <Button>+1.25</Button>
              <Button>+1.50</Button>
            </div>
          </div>

          <div className="products">
            <Row gutter={10}>{this.renderProducts()}</Row>

            <div className="pagination-products">
              <Pagination showLessItems={true} showSizeChanger={false} responsive={true} total={500} itemRender={this.itemRender} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProducts;
