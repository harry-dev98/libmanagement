import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {
    Home,
    Logout
} from './features/components';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/adduser" component={""} />
            <Route exact path="/register" component={""} />
            <Route exact path="/booklist" component={""} />
            <Route exact path="/profile" component={""} />
            <Route exact path="/editprofile" component={""} />
        </Switch>
    </Router>
)