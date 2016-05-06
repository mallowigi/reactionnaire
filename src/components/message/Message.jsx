import React from 'react';
import mui from 'material-ui';

const {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var message = this.props.message;
    let secondaryText = (
      <div style={{height: 'auto'}}>
        <span style={{color: 'black'}}>{message.author}</span><br/>
        <small>{message.date}</small>
      </div>
    );

    let avatar = <Avatar src={message.profile_pic}></Avatar>;
    return (
      <ListItem leftAvatar={avatar}
                primaryText={message.message}
                secondaryText={secondaryText}>

      </ListItem>
    )
  }
}

export default Message;
