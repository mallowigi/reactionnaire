import React from 'react';
import mui from 'material-ui';

const {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var message = this.props.message;

    let avatar = <Avatar src={message.profile_pic}></Avatar>;
    return (
      <ListItem leftAvatar={avatar}>{message.message}</ListItem>
    )
  }
}

export default Message;
