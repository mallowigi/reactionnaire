import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import Constants from '../constants/index';
import _ from '../config/lodashMixins';

/**
 * @class
 * @mixes StoreModel
 */
@datasource(ChannelSource)
@decorate(alt)
class ChannelsStore {

  constructor () {
    this.state = {
      channels: [],
      selectedChannel: null
    };
  }

  /**
   * Store the channels received
   * @param channels
   */
  @bind(Actions[Constants.CHANNELS_RECEIVED])
  receivedChannels (channels) {
    channels = _.toMap(channels);
    let selectedChannel = _.first((channels));
    selectedChannel.selected = true;

    this.setState({
      channels,
      selectedChannel
    });

    // Dispatch an action that the selected channel has been changed
    Actions[Constants.SELECTED_CHANNEL].defer(selectedChannel);
  }

  @bind(Actions[Constants.SELECTED_CHANNEL])
  selectedChannel (channel) {
    let channels = _.map(this.state.channels, chan => {
      chan.selected = false;
      return chan;
    });

    channel.selected = true;
    this.setState({
      channels: channels,
      selectedChannel: channel
    })
  }
 
}

export default alt.createStore(ChannelsStore);
