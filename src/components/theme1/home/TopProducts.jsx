import React from "react";
import './_top-products.scss';
// ui
import { Row, Col } from "antd";
// icons
import { AiOutlineHeart } from "react-icons/ai";

class TopProducts extends React.Component {
  render() {
    return (
      <div className="home-top-products">
        <div className="container">
          <div className="top-products">
            <h4>Products</h4>
            <h2>Our Top Selling Lenses</h2>
            <div className="products">
              <Row gutter={5}>
                <Col md={6} sm={12} xs={24}>
                  <div className="product-card">
                    <div className="actions">
                      <a href="/" className="favorite">
                        <AiOutlineHeart />
                      </a>
                      <a href="/" className="add-card">
                        <img
                          src="./assets/images/icons/shopping-bag.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="info">
                      <img
                        src="./assets/images/products/p1.png"
                        alt="product"
                      />
                      <h6>PureVision Multifocal Contact Lenses</h6>
                      <div className="price">
                        <p>
                          ₹ 500.0 <span>₹ 600.00</span>
                        </p>
                      </div>
                    </div>
                    <div className="product-ft">
                      <a href="/" className="buy-now">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <div className="product-card">
                    <div className="actions">
                      <a href="/" className="favorite">
                        <AiOutlineHeart />
                      </a>
                      <a href="/" className="add-card">
                        <img
                          src="./assets/images/icons/shopping-bag.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="info">
                      <img
                        src="./assets/images/products/p1.png"
                        alt="product"
                      />
                      <h6>PureVision Multifocal Contact Lenses</h6>
                      <div className="price">
                        <p>
                          ₹ 500.0 <span>₹ 600.00</span>
                        </p>
                      </div>
                    </div>
                    <div className="product-ft">
                      <a href="/" className="buy-now">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <div className="product-card">
                    <div className="actions">
                      <a href="/" className="favorite">
                        <AiOutlineHeart />
                      </a>
                      <a href="/" className="add-card">
                        <img
                          src="./assets/images/icons/shopping-bag.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="info">
                      <img
                        src="./assets/images/products/p1.png"
                        alt="product"
                      />
                      <h6>PureVision Multifocal Contact Lenses</h6>
                      <div className="price">
                        <p>
                          ₹ 500.0 <span>₹ 600.00</span>
                        </p>
                      </div>
                    </div>
                    <div className="product-ft">
                      <a href="/" className="buy-now">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <div className="product-card">
                    <div className="actions">
                      <a href="/" className="favorite">
                        <AiOutlineHeart />
                      </a>
                      <a href="/" className="add-card">
                        <img
                          src="./assets/images/icons/shopping-bag.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="info">
                      <img
                        src="./assets/images/products/p1.png"
                        alt="product"
                      />
                      <h6>PureVision Multifocal Contact Lenses</h6>
                      <div className="price">
                        <p>
                          ₹ 500.0 <span>₹ 600.00</span>
                        </p>
                      </div>
                    </div>
                    <div className="product-ft">
                      <a href="/" className="buy-now">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopProducts;
