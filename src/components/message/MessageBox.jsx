import React from 'react';
import mui from 'material-ui';

const {ListItem, Card} = mui;

class MessageBox extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Card className="messagebox-card">
        <textarea />
      </Card>
    )
  }
}

export default MessageBox;
