import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Store from 'stores/SearchResultStore';
import Actions from 'actions/SearchActions';
import Item from 'components/SearchResultItem';
import Artist from 'models/Artist';
import Track from 'models/Track';

@connectToStores
class SearchDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores(props) {
        return [Store];
    }

    static getPropsFromStores(props) {
        return Store.getState();
    }

    render() {
        return (
            <div>
                <h1>Count: {this.props.items.length}</h1>
                <ul>
                {this.props.items.map((item, i) => {
                    return <Item key={i} track={new Track(item)} artist={new Artist(item)}/>
                })}
                </ul>
            </div>
        );
    }
}

export default SearchDialog;