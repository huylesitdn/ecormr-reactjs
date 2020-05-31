import React from "react";
import "./_index.scss";
import { Switch, Route } from "react-router-dom";
// components
import Home from "../home";
import ExScroll from '../ex-scroll'
// ui
import { Layout } from 'antd';

const { Content } =  Layout;

class RoutesTheme2 extends React.Component {
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
      // <Layout className="them2">

      //   <Content className="main-layout">
        <Switch>
          {/* <Route exact path={`${url}/categories`} component={Categories} /> */}
          <Route path={`${url}/ex-scroll`} component={ExScroll} />
          <Route path={`${url}`} component={Home} />
          {/* <Route path="/" component={} /> */}
          {/* <Redirect exact from="/" to="/theme2" /> */}
        </Switch>
      //   </Content>

      // </Layout>

    );
  }
}

export default RoutesTheme2;
