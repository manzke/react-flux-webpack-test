// Bootstrapping module
import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import routes from 'routes';

render((<Router routes={routes} history={createHashHistory()}/>), document.getElementById('content'));