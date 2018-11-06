/**
 * @interface
 */
export default class AdLoadable {
  /**
   * Returns the loaded Ad from AdServer
   * @param {string} id - the Ad unique identifier
   * @param {Object} specification - Ad's connector specific data required to load it
   * @param {string} specification.source - connector source
   * @returns {Promise} Promise object representing when the operation finish
   */
  loadAd ({id, specification}) {
    throw new Error('AdLoadable#loadAd must be implemented')
  }
}
