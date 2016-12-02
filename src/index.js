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
      <IndexRoute component={Home} />
      {
        seed.views.map((v,i) => {
          const comp = require(`./${v.component}.jsx`).default;
          return(
            <Route key={i} path={v.name} component={comp} />
          )
        })
      }
    </Route>
  </Router>
  , document.getElementById('root')
);
