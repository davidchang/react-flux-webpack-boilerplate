var React = require('react');

var ExampleStore = require('stores/ExampleStore');
var ExampleActions = require('actions/ExampleActions');

var SubComponent = require('./SubComponent');

var getState = function() {
  return {
    message  : ExampleStore.message
  };
};

var counter = 0;

var Application = React.createClass({

  getInitialState : function() {
    return getState();
  },

  componentDidMount : function() {
    ExampleStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function() {
    ExampleStore.removeChangeListener(this._onChange);
  },

  _onChange : function() {
    this.setState(getState());
  },

  _sendMessage : function() {
    ExampleActions.sendMessage('hello world! ' + counter++);
  },

  render : function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>You can edit stuff in here and it will hot update</h2>
        <button onClick={this._sendMessage}>Send Message</button>

        <SubComponent message={this.state.message} />
      </div>
    );
  }

});

React.renderComponent(Application(), document.body);