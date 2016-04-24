import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';

/**
 * @class
 * @mixes StoreModel
 */
@decorate(alt)
class ChatStore {

  constructor () {
    this.state = {
      user: null
    };
  }

  /**
   * Login by setting the user to the logged in user
   * @param user
   */
  @bind(Actions.login)
  login (user) {
    this.setState({user: user});
  }

}

export default alt.createStore(ChatStore);
