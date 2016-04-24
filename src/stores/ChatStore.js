import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import Constants from '../constants/index';
import _ from 'lodash';

/**
 * @class
 * @mixes StoreModel
 */
@datasource(ChannelSource)
@decorate(alt)
class ChatStore {

  constructor () {
    this.state = {
      user: null,
      channels: [],
      selectedChannel: null
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

  /**
   * Store the channels received
   * @param channels
   */
  @bind(Actions[Constants.CHANNELS_RECEIVED])
  receivedChannels (channels) {
    let selectedChannel = _.first(_.toArray(channels));
    selectedChannel.selected = true;

    this.setState({
      channels,
      selectedChannel
    })
  }
}

export default alt.createStore(ChatStore);
