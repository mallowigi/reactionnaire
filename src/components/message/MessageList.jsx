import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

// Directives
const {Card, List} = mui;

class MessageList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      messages: []
    };

    this.firebaseRef = new Firebase('https://intense-torch-3109.firebaseio.com/messages');
    this.firebaseRef.once('value', (snapshot) => {
      const messages = snapshot.val();
      this.setState({
        messages: messages
      })
    });
  }

  render () {
    let messageNodes = _.map(this.state.messages, ((message, key) => {
      return (
        <Message key={key} message={message.message}></Message>
      );
    }));

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 10
      }}>
        <List>{messageNodes}</List>
      </Card>
    )
  }
}

export default MessageList;
