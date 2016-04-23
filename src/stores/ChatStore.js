import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import Constants from '../constants/index';
import _ from 'lodash';


@datasource(ChannelSource)
@decorate(alt)
class ChatStore {
  constructor () {
    this.state = {
      user: null
    };
  }

  @bind(Actions.login)
  login (user) {
    this.setState({user: user});
  }

  @bind(Actions[Constants.CHANNELS_RECEIVED])
  receivedChannels (channels) {
    let selectedChannel;
    _.each(channels, (channel, key, i) => {
      channels[key].key = key;
      if (i == 0) {
        selectedChannel = channel;
        channel.selected = true;
      }
    });

    this.setState({
      channels: channels,
      selectedChannel: selectedChannel
    })
  }
}

export default alt.createStore(ChatStore);
