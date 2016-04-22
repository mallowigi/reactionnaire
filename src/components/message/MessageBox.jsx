import React from 'react';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

import firebaseRefs from '../../config/firebaseRefs';

const {ListItem, Card} = mui;

class MessageBox extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      message: ''
    };

    this.firebaseRef = new Firebase(firebaseRefs.messages);
  }

  static propTypes = {
    message: React.PropTypes.string
  };

  onChange = (evt) => {
    this.setState({message: evt.target.value});
  };

  onKeyUp = (evt) => {
    if (evt.keyCode === 13 && _.trim(evt.target.value)) {
      evt.preventDefault();

      this.firebaseRef.push({
        message: this.state.message
      });

      this.setState({
        message: ''
      });
    }
  };

  render () {
    return (
      <Card className="messagebox-card">
        <textarea
          value={this.state.message}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}/>
      </Card>
    )
  }
}

export default MessageBox;
