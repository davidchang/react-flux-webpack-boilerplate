var AppDispatcher = require('../AppDispatcher');
var ExampleConstants = require('constants/ExampleConstants');

var ExampleActions = {

  sendMessage : message => {
    AppDispatcher.handleViewAction({
      actionType : ExampleConstants.SEND_MESSAGE,
      message : message
    });
  }

};

module.exports = ExampleActions;