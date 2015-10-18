import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/SearchActions';

@createStore(flux)
class SearchResultStore {
    searchTerm = '';
    entity = 'song';
    limit = 25;
    items = [];
    loading = false;

    @bind(actions.search)
    search(options) {
        console.log('SearchResultStore.search(..) - '+ JSON.stringify(options));
        this.loading = options.loading;
        this.searchTerm = options.searchTerm;
        this.entity = options.entity;
        this.limit = options.limit;
        this.items = [];
    }

    @bind(actions.searchSuccess)
    searchSuccess(items) {
        console.log('SearchResultStore.searchSuccess(..) - '+ JSON.stringify(items));
        this.loading = false;
        this.items = items;
    }
}

export default SearchResultStore;