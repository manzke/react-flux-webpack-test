import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/MediaActions';

@createStore(flux)
class MediaStore {
    searchTerm = '';
    entity = 'song';
    limit = 25;
    items = [];

    @bind(actions.search)
    search(options) {
        console.log('MediaStore.search(..)');
        this.searchTerm = options.searchTerm;
        this.entity = options.entity;
        this.limit = options.limit;
        this.items = [];
    }

    @bind(actions.searchSuccess)
    searchSuccess(items) {
        console.log(items);
        this.items = items;
    }
}

export default MediaStore;