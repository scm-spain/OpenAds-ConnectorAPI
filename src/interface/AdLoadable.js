/**
 * @interface
 */
export default class AdLoadable {
  /**
   * Returns the loaded Ad from AdServer
   * @param {string} domElementId
   * @param {string} placement
   * @param {Array<Array<number,number>>} sizes
   * @param {string} segmentation
   * @param {Object} native - Fields requested to the ad server
   * @returns {Promise} Promise object representing when the operation finish
   */
  loadAd ({domElementId, placement, sizes, segmentation, native}) {
    throw new Error('AdLoadable#loadAd must be implemented')
  }
}
