import Actions from '../actions';
import Firebase from 'firebase';

import firebaseRefs from '../config/firebaseRefs';
import Constants from '../constants/index';

/**
 * Define the sources for getting messages
 * @type {{getChannels: {}}}
 */
let MessagesSource = {
  /**
   * For each source we need to define a remote method as well as success and error actions
   */
  getMessages: {
    /**
     * Binds the data to the state of the store this source will be bound to
     * @param state
     */
    remote(state) {
      // All messages with a given channel
      let firebaseRef = new Firebase(firebaseRefs.messages + `/${state.selectedChannel.key}`);

      return new Promise((resolve, reject) => {
        // Get the data from firebase
        firebaseRef.once('value', (snapshot) => {
          let messages = snapshot.val();
          resolve(messages);
        });
      });
    },

    // Defines the actions to send when success/error (mandatory)
    success: Actions[Constants.MESSAGES_RECEIVED],
    error: Actions[Constants.MESSAGES_FAILED],
    loading: Actions[Constants.MESSAGES_LOADING]
  }
};

export default MessagesSource;
