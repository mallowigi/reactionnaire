import Actions from '../actions';
import Firebase from 'firebase';

import firebaseRefs from '../config/firebaseRefs';
import Constants from '../constants/index';

const firebaseRef = new Firebase(firebaseRefs.channels);

/**
 * Define the sources for getting channels
 * @type {{getChannels: {}}}
 */
let ChannelSource = {
  /**
   * For each source we need to define a remote method
   */
  getChannels: {
    /**
     * Binds the data to the state of the store this source will be bound to
     * @param state
     */
    remote(state) {
      return new Promise((resolve, reject) => {
        // Get the data from firebase
        firebaseRef.once('value', (snapshot) => {
          let channels = snapshot.val();
          resolve(channels);
        });
      });
    },

    // Defines
    success: Actions[Constants.CHANNELS_RECEIVED],
    error: Actions[Constants.CHANNELS_FAILED]
  }
};

export default ChannelSource;
