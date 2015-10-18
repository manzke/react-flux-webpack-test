import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import NotFoundPage  from 'pages/NotFoundPage';

import App from 'app';
import Home from 'views/Home';
import Artist from 'views/ArtistDetails'
import Track from 'views/TrackDetails'

const router = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='/artist/:id' component={Artist} />
        <Route path='/track/:id' component={Track} />
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default router;