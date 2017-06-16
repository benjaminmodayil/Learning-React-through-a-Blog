var React = require('react');
var More_settings = require('./More_settings');

class ChatBox_settings extends React.Component {
  render() {
    return (
      <header>
          <p>Ask Name</p>
          <img src="./images/caret-down.svg" />
      </header>
      )
  }   
}

module.exports = ChatBox_settings;