import React from "react";
import "./_index.scss";
// components
import HeaderPage from "../../components/layouts/header";
import Banner from "../../components/home/Banner";
import TopProducts from "../../components/home/TopProducts";
import BuyColors from "../../components/home/BuyColors";
import DailyDisposable from "../../components/home/DailyDisposable";
import Partners from "../../components/home/Partners";
import Slider from "../../components/home/Silder";
import FooterPage from '../../components/layouts/footer'
// ui
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

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
            <BuyColors />
            <DailyDisposable />
            <Partners />
            {/* <Slider /> */}
          </div>
        </Content>

        {/* <FooterPage /> */}
      </Layout>
    );
  }
}

export default Home;
