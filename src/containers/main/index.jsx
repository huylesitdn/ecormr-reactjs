import React from 'react';
import './index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
// admin
import Admin from '../admin/index';
// customers
import Home from '../home/index';
import Example from '../example/index';
import Login from '../login/index';
import Register  from '../register/index';

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
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;