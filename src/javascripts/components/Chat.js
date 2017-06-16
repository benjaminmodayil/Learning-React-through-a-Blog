var React = require('react');
var ChatBox_settings = require('./ChatBox_settings');
var ChatBox = require('./ChatBox');
var ChatInput = require('./ChatInput');


class Chat extends React.Component {
  render() {
    return (
      <div className='container'>
        <ChatBox_settings />
        <ChatBox />
        <ChatInput />
      </div>
    )
  }
}

module.exports = Chat;
