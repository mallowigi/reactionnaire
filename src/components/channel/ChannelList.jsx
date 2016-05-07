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
  }

  /**
   * When the channel list is mounted, get the channels
   */
  componentDidMount() {
    // Get the channel from the route
    if (this.props.params) {
      this.selectedChannel = this.props.params.channel;
    }
    // Call getChannels with the selected channel from the url
    ChannelStore.getChannels(this.selectedChannel);
  }

  /**
   * Watch for url changes, in order to get channels everytime the url changes
   * @param nextProps
   */
  componentWillReceiveProps (nextProps) {
    if (nextProps.params && this.selectedChannel !== nextProps.params.channel) {
      this.selectedChannel = nextProps.params.channel;
      ChannelStore.getChannels(this.selectedChannel);
    }
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
      <Card style={{ flex: 1 }}>
        <List>{channelNodes}</List>
      </Card>
    )
  }
}

export default ChannelList;
