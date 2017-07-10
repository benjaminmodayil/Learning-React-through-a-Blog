import React from 'react'

class ChatInput extends React.Component {
  componentDidMount() {
    this.inputText.focus()
  }

  handleSubmit = event => {
    const { onSubmit } = this.props
    const text = this.inputText.value.trim()
    if (text) {
      onSubmit(text)
      this.inputText.value = ''
      this.inputText.focus()
    }
    event.preventDefault()
  }

  render() {
    return (
      <form className="message-input" onSubmit={this.handleSubmit} autoComplete="off">
        <label htmlFor="message-input" className="screenreader-only">Message</label>
        <input ref={input => (this.inputText = input)} type="text" id="message-input" />
        <button type="submit" className="send">Send</button>
      </form>
    )
  }
}

export default ChatInput
