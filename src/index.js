var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Render the main component into the dom
ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={HomeContainer}/>
        </Route>
      </Router>, document.getElementById('app')
);
