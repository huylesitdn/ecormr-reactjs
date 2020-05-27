import React from "react";
import "./_index.scss";
// ui
import { Avatar, Rate, Tag } from "antd";
import { URL_MEDIA } from "../../../../config";

class CommentItem extends React.Component {
  render() {
    return (
      <div className="comment-item">
        <div className="comment-header">
          <div className="user">
            <Avatar
              size={60}
              //  src={`${URL_MEDIA}assets/images/icons/user.svg`}
            >
              JS
            </Avatar>
            <div className="info">
              <h3>Justine Samar</h3>
              <div className="rates">
                <Rate
                  disabled
                  defaultValue={Math.floor(Math.random() * 5 + 1)}
                />
                <Tag className="status" color="#F2994A">
                  Verified
                </Tag>
              </div>
            </div>
          </div>
          <div className="times">
            <img src={`${URL_MEDIA}assets/images/icons/calendar.svg`} alt="" />
            <span className="date-time">1/24/2020</span>
          </div>
        </div>

        <div className="comment-content">
          <h3>Amazing product</h3>
          <p>
            I love this lash glue. I have tried many others. No irritation and
            the strongest hold, even in the inner corner.
          </p>
        </div>
      </div>
    );
  }
}

export default CommentItem;
