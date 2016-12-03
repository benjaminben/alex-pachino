import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './App.css';

import App from './App.jsx';
import Home from './Home';

import seed from './seed';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" seed={seed} component={App}>
      <IndexRoute content={seed.views.home.content} component={Home} />
      {
        Object.keys(seed.views).map((v,i) => {
          const view = seed.views[v],
                comp = require(`./${view.component}.jsx`).default;
          return(
            <Route content={view.content} key={i} path={view.name} component={comp} />
          )
        })
      }
    </Route>
  </Router>
  , document.getElementById('root')
);
