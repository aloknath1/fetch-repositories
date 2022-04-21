import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Repos from './components/Repos';
import './index.css';
import { createRoot } from 'react-dom/client';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>		
			<Route path="user/:username/repos" component={Repos}/>					
        </Route>
    </Router>
);
const container  = document.getElementById('root');
const root = createRoot(container);
root.render(routes);