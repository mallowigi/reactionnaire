import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';

import App from '../components/App.jsx';
import Login from '../components/login/Login.jsx';
import Chat from '../components/Chat.jsx';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Chat}/>
    <Route path="chat" component={Chat}>
      <Route path=":channel" component={Chat}/>
    </Route>
    <Route path="login" component={Login}/>
  </Route>
);

// Instead of firing render at main, we render it there
ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, window.container);
