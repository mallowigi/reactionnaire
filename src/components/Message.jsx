import React from 'react';
import mui from 'material-ui';

const {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let avatar = (<Avatar
      src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p40x40/12801144_10153430631613008_4143527591061694346_n.jpg?oh=cd251c2e914117d1f7e349d6d1afdd0e&oe=57A97ADC&__gda__=1467108535_434a61773ddd762f8cfd847559ca8b01"></Avatar>);
    return (<ListItem leftAvatar={avatar}>{this.props.message}</ListItem>)
  }
}

export default Message;
