import React from 'react';
import './index.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// components
// admin
import Admin from '../admin/index';
// customers
import Example from '../example/index';
import Login from '../login/index';
import Register  from '../register/index';
// theme1
import RoutesTheme1 from "../theme1/routes"
// theme2
import RoutesTheme2 from '../theme2/routes'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.stat= {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/example" component={Example} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/theme1" component={RoutesTheme1} />
          <Route path="/theme2" component={RoutesTheme2} />
          {/* <Route path="/" component={} /> */}
          <Redirect exact from="/" to="/theme2" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;