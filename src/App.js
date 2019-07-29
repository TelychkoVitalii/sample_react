import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { routes } from "./router/route.config";
import { history } from "./helpers/history";

export default class App extends Component {
  render() {
    return (
      // Router wrapper
      <Router history={history}>
        <Switch>
          {routes.map((r, i) => <Route key={i} exact path={r.path} component={r.component} />)}
        </Switch>
      </Router>
    );
  }
}
