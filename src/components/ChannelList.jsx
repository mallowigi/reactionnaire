import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

// Directives
const {Card, List} = mui;

class ChannelList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let channelNodes = this.props.channels.map((channel) => {
      return (
        <Channel channel={channel}></Channel>
      );
    })
    return (
      <Card style={{
      flexGrow: 1
      }}>
        <List>{channelNodes}</List>
      </Card>
    )
  }
}

export default ChannelList;
