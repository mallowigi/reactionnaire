import alt from '../alt';
import Firebase from 'firebase';
import firebaseRefs from '../config/firebaseRefs';

import Constants from '../constants/Constants';

class Actions {

  constructor () {
    this.generateActions(
      Constants.CHANNELS_RECEIVED,
      Constants.CHANNELS_FAILED,
      Constants.MESSAGES_RECEIVED,
      Constants.MESSAGES_FAILED,
      Constants.MESSAGES_LOADING,
      Constants.SELECTED_CHANNEL,
      Constants.SEND_MESSAGE_SUCCESS,
      Constants.SEND_MESSAGE_FAILURE
    )
  }

  /**
   * Log the user
   * @param args
   * @returns {function(dispatcher)}
   */
  login () {
    return (dispatch) => {
      let firebaseRef = new Firebase(firebaseRefs.socket);
      firebaseRef.authWithOAuthPopup("google")
        .then(user => {
          dispatch(user)
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  /**
   * Send a message action
   * @param args
   * @returns {function()}
   */
  sendMessage ({message = ''}) {
    return (dispatch) => {
      dispatch(message);
    }
  }
}

export default alt.createActions(Actions);
