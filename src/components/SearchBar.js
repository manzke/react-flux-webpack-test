import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import SearchResultStore from 'stores/SearchResultStore';
import SearchActions from 'actions/SearchActions';

@connectToStores
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: props.searchTerm
        }
    }

    static getStores(props) {
        return [SearchResultStore];
    }

    static getPropsFromStores(props) {
        return SearchResultStore.getState();
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
        let value = evt.target.value;
        this.setState({searchTerm: value});
        SearchActions.search(value);
    }
}

export default SearchBar;