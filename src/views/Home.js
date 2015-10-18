import React from 'react';
import {RouteHandler, Link} from 'react-router';
import SearchDialog from 'components/SearchDialog';
import SearchBar from 'components/SearchBar';

class Home extends React.Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <SearchDialog/>
            </div>
        );
    }
}

export default Home;