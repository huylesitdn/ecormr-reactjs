import React from "react";
import "./_index.scss";
// components
import HeaderPage from "../../components/layouts/header";
import Banner from "../../components/home/Banner";
import TopProducts from "../../components/home/TopProducts";
import BuyColorsContact from "../../components/home/BuyColorsContact";
import DailyDisposable from "../../components/home/DailyDisposable";
import Partners from "../../components/home/Partners";
import Sliders from "../../components/home/Sliders";
import FooterPage from "../../components/layouts/footer";
// ui
import { Layout } from "antd";

const { Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <HeaderPage />

        <Content className="main-layout">
          <div className="home-ctn">
            <Banner />
            <TopProducts />
            <BuyColorsContact />
            <DailyDisposable />
            <Partners />
            <Sliders />
          </div>
        </Content>

        <FooterPage />
      </Layout>
    );
  }
}

export default Home;
