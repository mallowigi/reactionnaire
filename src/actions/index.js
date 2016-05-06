import alt from '../alt';
import Firebase from 'firebase';
import firebaseRefs from '../config/firebaseRefs';

import Constants from '../constants';

class Actions {

  constructor () {
    this.generateActions(
      Constants.CHANNELS_RECEIVED,
      Constants.CHANNELS_FAILED,
      Constants.MESSAGES_RECEIVED,
      Constants.MESSAGES_FAILED,
      Constants.MESSAGES_LOADING,
      Constants.SELECTED_CHANNEL,
    )
  }

  /**
   * Log the user
   * @param args
   * @returns {function(dispatcher)}
   */
  login (args = {}) {
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
}

export default alt.createActions(Actions);
