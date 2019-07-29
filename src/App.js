import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { routes } from "./router/route.config";
import { history } from "./helpers/history";
import api from "./api/socket.service";

export default connect()(class App extends Component {
  componentDidMount() {
    api.auth({ token: '123'});
  };

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
})
