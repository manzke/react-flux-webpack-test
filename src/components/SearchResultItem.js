import React from 'react';
import {Link} from 'react-router';


class SearchResultItem extends React.Component {
    render() {
        return (
            <li>
                <Link key={this.props.artist.id} to={`/artist/${this.props.artist.id}`}>{this.props.artist.name}</Link> / <Link key={this.props.track.id} to={`/track/${this.props.track.id}`}>{this.props.track.name}</Link>
            </li>
        );
    }
}

export default SearchResultItem;