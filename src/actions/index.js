import alt from '../alt';
import Firebase from 'firebase';
import firebaseRefs from '../config/firebaseRefs';

class Actions {
  /**
   * Log the user
   * @param args
   * @returns {function(dispatcher)}
   */
  login (args={}) {
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
