import React from 'react';
import mui from 'material-ui';
import Actions from '../../actions/Actions';

import {withRouter} from 'react-router';
const {Card, CardText, RaisedButton} = mui;

class Login extends React.Component {

  onClick = (evt) => {
    Actions.login(this.props.router);
  };

  render () {
    return (
      <Card className="login">
        <CardText style={{ textAlign: 'center' }}>
          To start chatting please log in with your google account
        </CardText>

        <RaisedButton style={{display:'block'}}
                      onClick={this.onClick}
                      label="Log in with Google">
        </RaisedButton>
      </Card>
    )
  }
}

export default withRouter(Login);
