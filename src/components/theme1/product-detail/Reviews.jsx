import React from "react";
import "./_reviews.scss";
// components
import CommentItem from "../../../components/theme1/common/comment";
// ui
import { Row, Col, Button, Rate, Progress } from "antd";
import { URL_MEDIA } from "../../../config";

class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <h1>Reviews (98)</h1>

        <Row gutter={24}>
          <Col md={12} xs={24}>
            <div className="total-reviews">
              <div className="sub-rate">
                <div className="views">
                  <Rate disabled defaultValue={5} />{" "}
                  <span className="total">(1776)</span>
                </div>
                <Progress
                  strokeWidth={15}
                  strokeColor="#FCCA46"
                  trailColor="#EDEDED"
                  percent={80}
                  showInfo={false}
                />
              </div>
              <div className="sub-rate">
                <div className="views">
                  <Rate disabled defaultValue={4} />{" "}
                  <span className="total">(382)</span>
                </div>
                <Progress
                  strokeWidth={15}
                  strokeColor="#FCCA46"
                  trailColor="#EDEDED"
                  percent={30}
                  showInfo={false}
                />
              </div>
              <div className="sub-rate">
                <div className="views">
                  <Rate disabled defaultValue={3} />{" "}
                  <span className="total">(34)</span>
                </div>
                <Progress
                  strokeWidth={15}
                  strokeColor="#FCCA46"
                  trailColor="#EDEDED"
                  percent={20}
                  showInfo={false}
                />
              </div>
              <div className="sub-rate">
                <div className="views">
                  <Rate disabled defaultValue={2} />{" "}
                  <span className="total">(18)</span>
                </div>
                <Progress
                  strokeWidth={15}
                  strokeColor="#FCCA46"
                  trailColor="#EDEDED"
                  percent={10}
                  showInfo={false}
                />
              </div>
              <div className="sub-rate">
                <div className="views">
                  <Rate disabled defaultValue={1} />{" "}
                  <span className="total">(14)</span>
                </div>
                <Progress
                  strokeWidth={15}
                  strokeColor="#FCCA46"
                  trailColor="#EDEDED"
                  percent={5}
                  showInfo={false}
                />
              </div>
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div className="actions">
              <div>
                <Button
                  icon={<img src={`${URL_MEDIA}assets/images/icons/msg.svg`} />}
                >
                  ASK A QUESTION
                </Button>
                <Button
                  icon={
                    <img src={`${URL_MEDIA}assets/images/icons/edit.svg`} />
                  }
                >
                  WRITE A REVIEW
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="comments">
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    );
  }
}

export default Reviews;
