import React from 'react';
import {RouteHandler, Link} from 'react-router';
import { Drawer, NotifyActions } from 'alt-notify';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Example</h1>
                <Link to='example'>Go to the Example page...</Link>
                <RouteHandler/>
                <Drawer render={(props) => {
                  return <div>{props.data}</div>
                }}/>
                <button type="button" onClick={Main.addNotification}>
                    Add a notification!
                </button>
                <button type="button" onClick={Main.doLogin}>
                    Login!
                </button>
            </div>
        );
    }

    doLogin() {
        UserActions.login('bla', 'bla');
    }

    addNotification() {
        NotifyActions.add({data: 'I\'m a message. Hello.'});
    }
}

export default Main;  