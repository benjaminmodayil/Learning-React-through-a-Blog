import React from 'react';

class ChatInput extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const text = this.inputText.value.trim();

    if (this.inputText.value === "" || this.inputText.value === " ") {
        console.log('You need text!')
    } else {
        onSubmit(text)
        this.inputText.value = ""
        // const chatbox = document.querySelector('.chatbox')
        // chatbox.scroll(0, chatbox.scrollHeight)
    }
  }

  render() {
    return (
      <form className="message-input" onSubmit={ this.handleSubmit }> 
        <label htmlFor="message-input" className="screenreader-only">Message</label>
        <input ref={(input) => this.inputText = input} type="text" id="message-input" />
        <button type="submit" className="send">Send</button>
      </form>
    )
  }
}

export default ChatInput;
