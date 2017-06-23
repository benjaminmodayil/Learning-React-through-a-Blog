import React from 'react';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';

class ChatBox extends React.Component {
  render() {
    const { messages } = this.props
    return (
      <div className="chatbox">
        { messages.map((message) => {
          if (message.user === "blue") {
            return(
              <MessageRight text={message.message}/>
            )
          } else {
              // {console.log(message.message)};
            return(
              <MessageLeft text={message.message}/>
            )
          }
        })}
      </div>
    )
  }
}

export default ChatBox;