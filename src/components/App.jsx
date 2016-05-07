import React from 'react';
import mui from 'material-ui';

import appTheme from '../config/appTheme';

const ThemeManager = mui.Styles.ThemeManager;
const AppBar = mui.AppBar;

class App extends React.Component {
  constructor () {
    super();
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
    return (
      <main>
        <AppBar title="Chat with friends"></AppBar>
        {this.props.children}
      </main>
    );
  }
}

export default App;
