import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

@createActions(flux)
class MediaActions {
    constructor() {
        this.generateActions('searchSuccess');
    }

    search(searchTerm) {
        let entity = 'song';
        let limit = 25;
        let loading = false;
        console.log('search.(..) - '+searchTerm);
        if(searchTerm.length > 2) {
            loading = true;
            superagent.get("https://itunes.apple.com/search?term="+searchTerm+"&entity="+entity+"&limit="+limit)
                .use(jsonp)
                .send()
                .end((error, response) => {
                    console.log(response.body);
                    this.actions.searchSuccess(response.body.results)
                });
        }
        return { 'searchTerm':searchTerm, 'entity': entity, 'limit':limit, 'loading': loading };
    }
}

export default MediaActions;