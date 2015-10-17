import React from 'react';
import {RouteHandler, Link} from 'react-router';
import MediaDialog from 'components/MediaDialog';
import SearchBar from 'components/SearchBar';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>itunes search</h1>
                <SearchBar/>
                <MediaDialog/>
            </div>
        );
    }
}

export default App;