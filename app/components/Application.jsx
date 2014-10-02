var React = require('react');

var SubComponent = require('./SubComponent');

var Application = React.createClass({

  _handler : function() {
    alert('hello world');
  },

  render : function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>You can edit stuff in here and it will hot update</h2>
        <button onClick={this._handler}>Click here please</button>

        <SubComponent />
      </div>
    );
  }

});

React.renderComponent(Application(), document.body);