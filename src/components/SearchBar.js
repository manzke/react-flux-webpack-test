import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import MediaStore from 'stores/MediaStore';
import MediaActions from 'actions/MediaActions';

@connectToStores
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: props.searchTerm
        }
    }

    static getStores(props) {
        return [MediaStore];
    }

    static getPropsFromStores(props) {
        return MediaStore.getState();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchTerm} onChange={this.onChange}/>
                <h1>Search: {this.state.searchTerm}</h1>
            </div>
        );
    }

    onChange = evt => {
        var value = evt.target.value;
        this.setState({searchTerm: value});
        MediaActions.search(value);
    }
}

export default SearchBar;