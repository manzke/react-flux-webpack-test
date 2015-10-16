import React from 'react';
import {Route, Redirect} from 'react-router';

import Main from 'components/main';
import Example from 'components/example';

const routes = (
    <Route handler={Main}>
        <Route name='example' handler={Example}/>
        <Route name='login' handler={Example} path="/auth/login"/>
        <Route name='user_info' handler={Example} path="/auth/info"/>
    </Route>
);

export default routes;