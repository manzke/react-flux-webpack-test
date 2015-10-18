import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import AppContextActions from 'actions/AppContextActions';

@createActions(flux)
class SearcActions {
    constructor() {
        this.generateActions('searchSuccess');
    }

    search(searchTerm) {
        let entity = 'song';
        let limit = 25;
        console.log('search.(..) - '+searchTerm);
        if(searchTerm.length > 2) {
            AppContextActions.startLoading();
            superagent.get("https://itunes.apple.com/search?term="+searchTerm+"&entity="+entity+"&limit="+limit)
                .use(jsonp)
                .send()
                .end((error, response) => {
                    console.log(response.body);
                    AppContextActions.finishedLoading();
                    this.actions.searchSuccess(response.body.results)
                });
        }
        return { 'searchTerm':searchTerm, 'entity': entity, 'limit':limit };
    }
}

export default SearcActions;