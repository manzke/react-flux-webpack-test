import flux from 'control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class DummyActions {
    constructor() {
        //this.generateActions('updateName');
    }

    updateName(name) {
        console.log('do whatever necessary!!!!')
        this.dispatch(name);
    }
}

export default DummyActions; 