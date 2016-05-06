import Actions from '../actions/Actions';
import Firebase from 'firebase';

import firebaseRefs from '../config/firebaseRefs';
import Constants from '../constants/Constants';

import Message from '../models/Message';

/**
 * Define the sources for getting messages
 */
let MessagesSource = {
  /**
   * For each source we need to define a remote method as well as success and error actions
   */

  /**
   * Get the messages from the source
   */
  getMessages: {
    /**
     * Binds the data to the state of the store this source will be bound to
     * @param state
     */
    remote(state) {
      // All messages with a given channel
      const firebaseUrl = firebaseRefs.messages + `/${state.selectedChannel.key}`;
      const firebaseRef = new Firebase(firebaseUrl);

      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return reject('Unable to access firebase url' + firebaseUrl)
        }

        // Get the data from firebase
        firebaseRef.once('value', (snapshot) => {
          let messages = snapshot.val();
          resolve(messages);
        });

        // For new messages
        firebaseRef.on('child_added', (msg) => {
          let msgVal = msg.val();
          msgVal.key = msg.key();

          // fire messageReceived action
          Actions[Constants.MESSAGE_RECEIVED](msgVal);
        })
      });
    },

    // Defines the actions to send when success/error (mandatory)
    success: Actions[Constants.MESSAGES_RECEIVED],
    error: Actions[Constants.MESSAGES_FAILED],
    loading: Actions[Constants.MESSAGES_LOADING]
  },

  /**
   * Add a message to the source
   */
  sendMessage: {
    remote (state) {
      const firebaseUrl = firebaseRefs.messages + `/${state.selectedChannel.key}`;
      const firebaseRef = new Firebase(firebaseUrl);

      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return reject('Unable to access firebase url' + firebaseUrl)
        }

        const message = new Message({
          message: state.message,
          date: new Date().toUTCString(),
          author: state.user.google.displayName,
          userId: state.user.uid,
          profile_pic: state.user.google.profileImageURL
        });
        // Push message to firebase, and set the message's key
        message.key = firebaseRef.push(message).key();

        resolve(message);
      })
    },

    success: Actions[Constants.SEND_MESSAGE_SUCCESS],
    error: Actions[Constants.SEND_MESSAGE_FAILURE]
  }
};

export default MessagesSource;
