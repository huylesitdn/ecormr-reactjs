import React from "react";
import "./_index.scss";
import { Switch, Route } from "react-router-dom";
// components
import HeaderPage from "../../../components/theme1/layouts/header";
import FooterPage from "../../../components/theme1/layouts/footer";
// components
import Home from "../home";
import Categories from "../categories";
import ProductDetail from '../product-detail';
// ui
import { Layout } from 'antd';

const { Content } =  Layout;

class RoutesTheme1 extends React.Component {
  constructor(props) {
    super(props);
    this.stat = {};
  }

  render() {
    const {
      match: { url }
    } = this.props;
    console.log(url);
    return (
      <Layout className="them1">
        <HeaderPage />

        <Content className="main-layout">
        <Switch>
          <Route exact path={`${url}/categories`} component={Categories} />
          <Route path={`${url}/product/:id`} component={ProductDetail} />
          <Route path={`${url}`} component={Home} />
          {/* <Route path="/" component={} /> */}
          {/* <Redirect exact from="/" to="/theme1" /> */}
        </Switch>
        </Content>

        <FooterPage />
      </Layout>

    );
  }
}

export default RoutesTheme1;
