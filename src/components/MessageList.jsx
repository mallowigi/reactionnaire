import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

// Directives
const {Card, List} = mui;

class MessageList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let messageNodes = this.props.messages.map((message) => {
      return (
        <Message message={message}></Message>
      );
    })
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
