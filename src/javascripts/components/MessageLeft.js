import React from 'react';

class MessageLeft extends React.Component {
  render() {
    const { text } = this.props
    return(
      <div className="message message-left">
        <p>{text}</p> 
      </div>
    )
  }
}

export default MessageLeft;
