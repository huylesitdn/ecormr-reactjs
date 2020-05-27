import React from "react";
import "./_index.scss";
// components
import Banner from "../../../components/theme1/home/Banner";
import TopProducts from "../../../components/theme1/home/TopProducts";
import BuyColorsContact from "../../../components/theme1/home/BuyColorsContact";
import DailyDisposable from "../../../components/theme1/home/DailyDisposable";
import Partners from "../../../components/theme1/home/Partners";
import Sliders from "../../../components/theme1/home/Sliders";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-ctn">
        <Banner />
        <TopProducts title1="Products" title2="Our Top Selling Lenses" />
        <BuyColorsContact />
        <DailyDisposable />
        <Partners />
        <Sliders />
      </div>
    );
  }
}

export default Home;
