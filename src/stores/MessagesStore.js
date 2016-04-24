import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import Constants from '../constants/index';
import _ from '../config/lodashMixins';
import MessagesSource from '../sources/MessagesSource';

/**
 * @class
 * @mixes StoreModel
 */
@datasource(MessagesSource)
@decorate(alt)
class MessagesStore {

  constructor () {
    this.state = {
      messages: [],
      selectedChannel: null
    };
  }

  @bind(Actions[Constants.MESSAGES_RECEIVED])
  receivedMessages (messages) {
    messages = _.toMap(messages);
    
    this.setState({
      messages
    })
  }
  
  @bind(Actions[Constants.SELECTED_CHANNEL])
  selectedChannel (channel) {
    this.setState({
      selectedChannel: channel
    });

    // Once we get the selected channel, we can call getMessages
    this.getInstance().getMessages();
  }
}

export default alt.createStore(MessagesStore);
