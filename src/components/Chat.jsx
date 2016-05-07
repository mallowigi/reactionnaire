import React from 'react';


import MessageList from './message/MessageList.jsx';
import ChannelList from './channel/ChannelList.jsx';
import MessageBox from './message/MessageBox.jsx';

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
}

export default Chat;
