import alt from '../alt';
import Actions from '../actions/Actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import Constants from '../constants/Constants';
import _ from '../config/lodashMixins';
import MessagesSource from '../sources/MessagesSource';

import Message from '../models/Message';

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
      messagesLoading: true,
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

    // Once we get the selected channel, we can call getMessages (from MessagesSource)
    setTimeout(() => (this.getInstance().getMessages()), 0);
  }

  @bind(Actions.sendMessage)
  sendMessage (message) {
    this.setState({
      message
    });

    setTimeout(() => {
      this.getInstance().sendMessage();
    }, 0)
  }
  
  @bind(Actions[Constants.SEND_MESSAGE_SUCCESS])
  messageSent (message) {
    let messages = [...this.state.messages, message];

    this.setState({
      messages
    })
  }
}

export default alt.createStore(MessagesStore);
