import React from 'react';

class MessageRight extends React.Component {
  render() {
    const { text } = this.props
    return(
      <div className="message message-right">
        <p>{text}</p> 
      </div>
    )
  }
}

export default MessageRight;