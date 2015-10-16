import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import superagent from 'superagent';
import AuthStates from 'constants/AuthStates';

@createActions(flux)
class UserActions {
    constructor() {
        this.generateActions('me', 'logout', 'loginSuccess');
    }

    login(username, password) {
        superagent.get("https://pw-eu-dev.psft.co/provisioning/api/1/status")
            .send()
            .end((error, response) => {
                if (response.ok) {
                    this.actions.loginSuccess(AuthStates.LOGGED_IN);
                } else {
                    this.actions.loginSuccess(AuthStates.LOGIN_FAILED);
                }
            });
        return {username, password};
    }
}

export default UserActions;