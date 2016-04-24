import React from 'react';
import mui from 'material-ui';

import Actions from '../../actions';
import Constants from '../../constants/index';

const {ListItem} = mui;

class Channel extends React.Component {
  constructor (props) {
    super(props);
  }

  onClick = (evt) => {
    Actions[Constants.SELECTED_CHANNEL](this.props.channel);
  };

  render () {
    let style = {};
    if (this.props.channel.selected) {
      style.backgroundColor = '#d0d0d0';
    }

    return (
      <ListItem style={style} key={this.props.channel.key}
                onClick={this.onClick}
      >
        #{this.props.channel.name}
      </ListItem>
    );
  }
}

export default Channel;
