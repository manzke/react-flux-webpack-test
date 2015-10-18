import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/AppContextActions';

@createStore(flux)
class AppContextStore {
    loading = false;

    @bind(actions.startLoading)
    startLoading() {
        this.loading = true;
    }

    @bind(actions.finishedLoading)
    finishedLoading() {
        this.loading = false;
    }
}

export default AppContextStore;