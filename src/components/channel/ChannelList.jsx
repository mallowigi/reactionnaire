import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores'
import ChatStore from '../../stores/ChatStore';
import ChannelStore from '../../stores/ChannelStore';

// Directives
const {Card, List, CircularProgress} = mui;

@connectToStores
class ChannelList extends React.Component {
  constructor (props) {
    super(props);

    // Call the new getChannels method that get imported from the datasource
    ChannelStore.getChannels();
  }

  static getStores () {
    return [ChatStore, ChannelStore];
  }

  static getPropsFromStores () {
    return ChannelStore.getState();
  }

  render () {
    // Display a loader while fetching channels
    if (!this.props.channels) {
      return (
        <Card style={{flexGrow:1}}>
          <CircularProgress mode="indeterminate" style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            margin: '0 auto',
            display: 'block',
            width: '60px'
          }}></CircularProgress>
        </Card>
      )
    }

    let channelNodes = _.map(this.props.channels, (channel, key) => {
      return (
        <Channel key={key} channel={channel}></Channel>
      );
    });

    return (
      <Card style={{
        flex: 1
      }}>
        <List>{channelNodes}</List>
      </Card>
    )
  }
}

export default ChannelList;
