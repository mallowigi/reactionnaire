import Actions from '../actions/Actions';
import Firebase from 'firebase';

import firebaseRefs from '../config/firebaseRefs';
import Constants from '../constants/Constants';

const firebaseRef = new Firebase(firebaseRefs.channels);

/**
 * Define the sources for getting channels
 * @type {{getChannels: {}}}
 */
let ChannelSource = {
  /**
   * For each source we need to define a remote method as well as success and error actions
   */
  getChannels: {
    /**
     * Binds the data to the state of the store this source will be bound to
     * @param state
     */
    remote(state, selectedChannelKey) {
      return new Promise((resolve, reject) => {
        // Get the data from firebase
        firebaseRef.once('value', (snapshot) => {
          let channels = snapshot.val();

          // We need to track the selectedChannel
          if (!selectedChannelKey) {
            selectedChannelKey = _.keys(channels)[0];
          }

          let selectedChannel = channels[selectedChannelKey];
          if (selectedChannel) {
            selectedChannel.selected = true;
          }

          resolve(channels);
        });
      });
    },

    // Defines the actions to send when success/error (mandatory)
    success: Actions[Constants.CHANNELS_RECEIVED],
    error: Actions[Constants.CHANNELS_FAILED]
  }
};

export default ChannelSource;
