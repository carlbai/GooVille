import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Watch from './Watch';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        {/* add the routes here */}
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="/watch/:videoID" component={Watch} />

        </Route>
    </Router>,
    document.getElementById('root')
);
