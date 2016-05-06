import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import _ from 'lodash';

import connectToStores from 'alt-utils/lib/connectToStores';

import ChatStore from '../../stores/ChatStore';
import MessagesStore from '../../stores/MessagesStore';

// Directives
const {Card, List, CircularProgress} = mui;

@connectToStores
class MessageList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      messages: {}
    };
  }


  static getStores () {
    return [ChatStore, MessagesStore];
  }

  static getPropsFromStores () {
    return MessagesStore.getState();
  }

  render () {
    let messageNodes = null;

    if (!this.props.messagesLoading) {
      messageNodes = _.map(this.props.messages, ((message, key) => {
        return (
          <Message key={message.key} message={message}></Message>
        );
      }));
    } else {
      messageNodes = <CircularProgress mode="indeterminate"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          margin: '0 auto',
          display: 'block',
          width: '60px'
        }}>
      </CircularProgress>
    }

    return (
      <Card style={{
        flex: 2,
        marginLeft: 10
      }}>
        <List>{messageNodes}</List>
      </Card>
    )
  }
}

export default MessageList;
