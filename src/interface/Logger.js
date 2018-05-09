/**
 * @interface
 */
export default class Logger {
  /**
  * Enables or disables debug mode depending on the debug value
  * @param {boolean} true enables debug, false disables it
  */
  enableDebug ({debug}) {
    throw new Error('Logger#enableDebug must be implemented')
  }
}
