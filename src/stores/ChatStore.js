import alt from '../alt';
import Actions from '../actions/Actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import User from '../models/User';

/**
 * @class
 * @mixes StoreModel
 */
@decorate(alt)
class ChatStore {

  constructor () {
    this.state = {
      user: new User()
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
