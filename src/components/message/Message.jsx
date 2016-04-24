import React from 'react';
import mui from 'material-ui';

const {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let avatar = (<Avatar src={this.props.message.profile_pic}></Avatar>);
    return (<ListItem leftAvatar={avatar}>{this.props.message.message}</ListItem>)
  }
}

export default Message;
