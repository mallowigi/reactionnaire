import React from 'react';
import {withRouter} from 'react-router';

import MessageList from './message/MessageList.jsx';
import ChannelList from './channel/ChannelList.jsx';
import MessageBox from './message/MessageBox.jsx';

import ChatStore from '../stores/ChatStore';

class Chat extends React.Component {
  render () {
    return (
      <div>
        <section id="app" style={{maxHeight: '60vh'}}>
          <ChannelList></ChannelList>
          <MessageList></MessageList>
        </section>

        <section id="messageBox">
          <MessageBox></MessageBox>
        </section>
      </div>
    );
  }

  /**
   * Called before transitioning
   */
  componentWillMount () {
    var state = ChatStore.getState();
    if (!state.user.uid) {
      this.props.router.replace('/login');
    }
  }
}

export default withRouter(Chat);
