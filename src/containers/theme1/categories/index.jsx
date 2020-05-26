import React from "react";
// components
import Sliders from "../../../components/theme1/home/Sliders";
import Partners from "../../../components/theme1/home/Partners";
import Banner from "../../../components/theme1/categories/Banner";
import ListCategories from "../../../components/theme1/categories/ListCategories";
import AllProducts from "../../../components/theme1/categories/AllProducts";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="categories">
        <Banner />
        <ListCategories />
        <AllProducts />

        <Partners />
        <Sliders />
      </div>
    );
  }
}

export default Categories;
