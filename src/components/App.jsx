import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx'
import mui from 'material-ui';

import appTheme from '../config/appTheme';

const ThemeManager = mui.Styles.ThemeManager;
const ThemeDecorator = mui.Styles.ThemeDecorator;
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      messages: [
        'Hello how are you',
        'Fine thank you'
      ],
      channels: [
        '#react',
        '#fb'
      ]
    };
  }

  // Available to all children
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  /**
   * Each child context will have a reference to the muiTheme
   * @returns {{muiTheme: *}}
   */
  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(appTheme)

    };
  }


  render () {
    return (
      <main>
        <AppBar title="Chat with friends"></AppBar>
        <section style={{
        display: 'flex',
        flexFlow: 'row wrap',
        maxWidth: 1200,
        width: '100%',
        margin: '30px auto 30px'
      }}>
          <ChannelList channels={this.state.channels}></ChannelList>
          <MessageList messages={this.state.messages}></MessageList>
        </section>
        <section>
          <MessageBox></MessageBox>
        </section>
      </main>
    );
  }
}

export default App;
