import React from 'react';
import mui from 'material-ui';

import MessageList from './message/MessageList.jsx';
import ChannelList from './channel/ChannelList.jsx';
import MessageBox from './message/MessageBox.jsx';
import Login from './login/Login.jsx';


import appTheme from '../config/appTheme';

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';


const ThemeManager = mui.Styles.ThemeManager;
const AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {
  constructor () {
    super();
  }


  /**
   * The list of stores that the connectToStores will connect to
   * @returns {*[]}
   */
  static getStores () {
    return [ChatStore];
  }

  /**
   * Need to implement this for alt. Return the props from the stores.
   * @returns {user}
   */
  static getPropsFromStores () {
    return ChatStore.getState();
  }

  // Available to all children
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

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
    var view = <Login/>;

    // Logged in
    if (this.props.user) {
      view = (
        <main>
          <AppBar title="Chat with friends"></AppBar>

          <section id="app">
            <ChannelList></ChannelList>
            <MessageList></MessageList>
          </section>

          <section id="messageBox">
            <MessageBox></MessageBox>
          </section>
        </main>
      );
    }

    return view;
  }
}

export default App;
