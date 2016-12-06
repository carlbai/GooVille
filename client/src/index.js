import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Watch from './Watch';
import Submit from './Submit';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
        {/* add the routes here */}
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="/watch/:videoID" component={Watch} />
            <Route path="/submit" component={Submit} />

        </Route>
    </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);
