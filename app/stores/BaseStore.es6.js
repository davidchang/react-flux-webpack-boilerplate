var _ = require('lodash');

var AppDispatcher = require('../AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var copyProperties = require('react/lib/copyProperties');

var CHANGE_EVENT = 'change';


class BaseStore {

  constructor(actions) {
    if (!_.isObject(actions)) {
      return;
    }

    // Register to handle all updates
    AppDispatcher.register(function(payload) {
      var action = payload.action;
      var text;

      if (actions[action.actionType]) {
        actions[action.actionType](action);
      }

      return true; // No errors.  Needed by promise in Dispatcher.
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

copyProperties(BaseStore.prototype, EventEmitter.prototype);


module.exports = BaseStore;