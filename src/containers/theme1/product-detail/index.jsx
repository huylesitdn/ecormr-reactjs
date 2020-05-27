import React from "react";
import "./_index.scss";
// components
import BreadcrumbPage from "../../../components/theme1/product-detail/BreadcrumbPage";
import Detail from "../../../components/theme1/product-detail/Detail";
import TopProducts from "../../../components/theme1/home/TopProducts";
import Partners from "../../../components/theme1/home/Partners";
import Sliders from "../../../components/theme1/home/Sliders";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-detail">
        <BreadcrumbPage />
        <Detail />
        <TopProducts title1="Similar Products" title2="YOU MAY ALSO LIKE" />
        <Partners />
        <Sliders />
      </div>
    );
  }
}

export default ProductDetail;
