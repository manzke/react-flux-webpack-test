import flux from 'control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class AppContextActions {
    constructor() {
        this.generateActions('startLoading', 'finishedLoading');
    }
}

export default AppContextActions;