import React from 'react';
import { Route, Switch} from 'react-router-dom';

import {
    Home,
    Logout,
    Book,
} from './features/components';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/users" component={""} />
        <Route exact path="/books" component={Book} />
        <Route exact path="/profile" component={""} />
        <Route exact path="/editprofile" component={""} />
    </Switch>
)