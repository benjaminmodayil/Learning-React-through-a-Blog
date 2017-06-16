var React = require('react');
var Message_left = require('./Message_left');
var Message_right = require('./Message_right');

class ChatBox extends React.Component {
  render() {
    return (
          <div className="chatbox">
            <Message_left />
            <Message_left />
            <Message_right />
          </div>
      )
  } 
}

module.exports = ChatBox;