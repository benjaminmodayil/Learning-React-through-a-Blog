import React from 'react'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'

class ChatBox extends React.Component {
  componentDidMount() {
    this.chatcontainer.scrollTo(0, this.chatcontainer.scrollHeight)
  }

  componentDidUpdate(prevProps, prevState) {
    this.chatcontainer.scrollTo(0, this.chatcontainer.scrollHeight)
  }

  render() {
    const { messages } = this.props
    return (
      <div ref={(chatbox) => this.chatcontainer = chatbox} className="chatbox">
        { messages.map((message) => {
          if (message.user === "blue") {
            return(
              <MessageRight text={message.message}/>
            )
          } else {
              return(
                <MessageLeft text={message.message}/>
              )
            }
        })}
      </div>
    )
  }
}

export default ChatBox