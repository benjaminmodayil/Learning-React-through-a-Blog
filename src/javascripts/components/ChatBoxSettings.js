var React = require('react');
var MoreSettings = require('./MoreSettings');

class ChatBoxSettings extends React.Component {
  render() {
    return (
      <header>
        <p>Ask Name</p>
        <img src="./images/caret-down.svg" />
      </header>
    )
  }   
}

module.exports = ChatBoxSettings;