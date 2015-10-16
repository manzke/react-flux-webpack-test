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
        console.log('search.(..) - '+searchTerm);
        if(searchTerm.length > 2) {
            superagent.get("https://itunes.apple.com/search?term="+searchTerm+"&entity=song&limit=25")
                .use(jsonp)
                .send()
                .end((error, response) => {
                    console.log(response.body);
                    this.actions.searchSuccess(response.body.results)
                });
        }
    }
}

export default MediaActions;