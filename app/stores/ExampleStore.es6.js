var BaseStore = require('./BaseStore');
var ExampleConstants = require('constants/ExampleConstants');

var storeInstance;

var message = '';

class ExampleStore extends BaseStore {
  get message() {
    return message;
  }
}

var actions = {};

actions[ExampleConstants.SEND_MESSAGE] = action => {
  message = action.message;
  storeInstance.emitChange();
};

storeInstance = new ExampleStore(actions);

module.exports = storeInstance;