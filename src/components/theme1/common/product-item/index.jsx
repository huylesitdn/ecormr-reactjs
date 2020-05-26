import React from "react";
import './_index.scss';
import { URL_MEDIA } from "../../../../config";
// icons
import { AiOutlineHeart } from "react-icons/ai";

class ProductItem extends React.Component {
  render() {
    return (
      <div className="product-item">
        <div className="actions">
          <a href="/" className="favorite">
            <AiOutlineHeart />
          </a>
          <a href="/" className="add-card">
            <img
              src={`${URL_MEDIA}assets/images/icons/shopping-bag.png`}
              alt=""
            />
          </a>
        </div>
        <div className="info">
          <img
            src={`${URL_MEDIA}assets/images/products/p1.png`}
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
    );
  }
}

export default ProductItem;
