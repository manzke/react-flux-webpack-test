import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import {RouteHandler, IndexLink} from 'react-router';
import Store from 'stores/AppContextStore';

@connectToStores
class App extends React.Component {
    static getStores(props) {
        return [Store];
    }

    static getPropsFromStores(props) {
        return Store.getState();
    }

    backButton() {
        console.log('backButton(..) - '+JSON.stringify(this.props.location));
        let { location } = this.props;
        console.log('backButton(..) - '+JSON.stringify(location));
        if(location.pathname !== '/') {
            return (<IndexLink to="/">Home</IndexLink>);
            console.log('backButton(..) - not route');
        } else {
            return 'Home';
        }
    }

    renderLoading() {
        console.log('renderLoading(..) - '+this.props.loading);
        if (this.props.loading) {
            return (
                "Loading..."
            )
        } else {
            return ""
        }
    }

    render() {
        return (
            <div>
                { this.backButton() }
                <h1>itunes search</h1>
                {this.props.children}
                { this.renderLoading() }
            </div>
        );
    }
}

export default App;