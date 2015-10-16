import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/UserActions';
import AuthStates from 'constants/AuthStates';

@createStore(flux) class UserStore {
    user = {
        uuid: '',
        username: '',
        company: ''
    };

    authState = AuthStates.LOGGED_OUT;

    @bind(actions.login)
    login(credentials) {
        console.log('UserStore.login(..)');
    }

    @bind(actions.loginSuccess)
    loginSuccess(state) {
        console.log(state);
        if (state === AuthStates.LOGGED_IN) {
            console.log('UserStore.loginSuccess(..) - ' + Symbol.keyFor(state));
            this.authState = state;
        }

    }
}

export default UserStore;