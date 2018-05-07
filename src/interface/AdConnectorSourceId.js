/**
 * @interface
 */
export default class AdConnectorSourceId {
  /**
   * Returns unique identifier of the connector to be used as source when position is created
   */
  get sourceId () {
    throw new Error('AdConnectorSourceId#sourceId must be implemented')
  }
}