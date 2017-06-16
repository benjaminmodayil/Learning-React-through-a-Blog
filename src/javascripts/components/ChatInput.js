var React = require('react');

class ChatInput extends React.Component {
  render() {
    return (
        <div className="message-input"> 
          <input label="send" />
          <button label="send" class="send">Send</button>
        </div>
      )
  }
}

module.exports = ChatInput;