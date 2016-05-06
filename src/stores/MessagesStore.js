import alt from '../alt';
import Actions from '../actions/Actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import Constants from '../constants/Constants';
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
      selectedChannel: null,
      messagesLoading: true
    };
  }

  @bind(Actions[Constants.MESSAGES_LOADING])
  messagesLoading () {
    this.setState({
      messagesLoading: true
    })
  }

  @bind(Actions[Constants.MESSAGES_RECEIVED])
  receivedMessages (messages) {
    messages = _.toMap(messages);
    
    this.setState({
      messages,
      messagesLoading: false
    })
  }
  
  @bind(Actions[Constants.SELECTED_CHANNEL])
  selectedChannel (channel) {
    this.setState({
      selectedChannel: channel
    });

    // Once we get the selected channel, we can call getMessages
    setTimeout(() => (this.getInstance().getMessages()), 0);
  }
}

export default alt.createStore(MessagesStore);
