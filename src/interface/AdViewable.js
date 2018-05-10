/**
 * @interface
 */
export default class AdViewable {
  /**
   * Returns an empty Promise when the display operation has finished
   * @param {string} id The unique identifier of the position
   * @returns {Promise} Promise object representing when the operation finish
   */
  display ({domElementId}) {
    throw new Error('AdViewable#display must be implemented')
  }

  /**
   * Returns and empty Promise when the refresh operation has finished
   * @param {string} id The unique identifier of the position
   * @param {string} placement
   * @param {Array<Array<number,number>>} sizes
   * @param {string} segmentation
   * @param {Object} native - Fields requested to the ad server
   * @returns {Promise} Promise object representing when the operation finish
   */
  refresh ({domElementId, placement, sizes, segmentation, native}) {
    throw new Error('AdViewable#refresh must be implemented')
  }
}
