import React from "react";
import "./_detail.scss";
// components
import Description from "./Description";
import Specifications from "./Specifications";
import Reviews from "./Reviews";
// ui
import { Row, Col, Button, Checkbox, Select, Tabs, Carousel, Form } from "antd";
import { URL_MEDIA } from "../../../config";
// icons
import { AiOutlineHeart } from "react-icons/ai";

const { TabPane } = Tabs;
const { Option } = Select;
const options = [
  { label: "Left Eye", value: "Left Eye" },
  { label: "Right Eye", value: "Right Eye" },
  { label: "Both Eye", value: "Both Eye" }
];

class Detail extends React.Component {
  onFinish = values => {
    console.log(values);
  };

  onChangeCheckbox = checkedValues => {
    console.log("checked = ", checkedValues);
  };

  render() {
    return (
      <div className="detail">
        <div className="container">
          <div className="detail-ctn">
            <Row gutter={64}>
              <Col md={12} xs={24}>
                <Carousel autoplay>
                  <div className="slider-item">
                    <img
                      src={`${URL_MEDIA}assets/images/products/p2.svg`}
                      alt=""
                    />
                  </div>
                  <div className="slider-item">
                    <img
                      src={`${URL_MEDIA}assets/images/products/p2.svg`}
                      alt=""
                    />
                  </div>
                  <div className="slider-item">
                    <img
                      src={`${URL_MEDIA}assets/images/products/p2.svg`}
                      alt=""
                    />
                  </div>
                </Carousel>
              </Col>
              <Col md={12} xs={24}>
                <Form onFinish={this.onFinish}>
                  <div className="info-detail">
                    <h2>PureVision 2 HD - Monthly Disposable Contact Lens</h2>
                    <p className="des-item">
                      Brand: <span className="cl-green">Bausch And Lomb</span>
                    </p>
                    <p className="des-item">
                      In Stock:{" "}
                      <span className="cl-dark">Ship Immediately</span>{" "}
                      <span className="cl-green">
                        Contains 6 Lenses Per Box
                      </span>
                    </p>

                    <div className="choose-options">
                      <h2>Please Choose:</h2>
                      <p>You want to buy for?</p>

                      <Form.Item>
                        <Checkbox.Group
                          options={options}
                          defaultValue={["Pear"]}
                          onChange={this.onChangeCheckbox}
                        />
                      </Form.Item>

                      <Row gutter={24}>
                        <Col md={12} xs={24}>
                          <Form.Item label="LEFT POWER: ">
                            <Select>
                              <Option value="1">+1.00</Option>
                              <Option value="2">+1.50</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col md={12} xs={24}>
                          <Form.Item label="Quantity +1  ">
                            <Select>
                              <Option value="1">+1.00</Option>
                              <Option value="2">+1.50</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col md={12} xs={24}>
                          <Form.Item label="RIGHT POWER: ">
                            <Select>
                              <Option value="1">+1.00</Option>
                              <Option value="2">+1.50</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col md={12} xs={24}>
                          <Form.Item label="Quantity +1+   ">
                            <Select>
                              <Option value="1">+1.00</Option>
                              <Option value="2">+1.50</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                    </div>

                    <div className="info-price">
                      <Row gutter={24}>
                        <Col md={13} sm={12} xs={24}>
                          <h4>
                            ₹ 1,499.00 <span>₹ 2,300.00</span>
                          </h4>
                        </Col>
                        <Col md={11} sm={12} xs={24}>
                          <div className="favorite">
                            <a>
                              <AiOutlineHeart /> Add to Wishlist
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="actions">
                      <Button type="primary" block>
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>

          <div className="tabs-info">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Description" key="1">
                <Description />
              </TabPane>
              <TabPane tab="Specifications" key="2">
                <Specifications />
              </TabPane>
              <TabPane tab="Reviews" key="3">
                <Reviews />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
