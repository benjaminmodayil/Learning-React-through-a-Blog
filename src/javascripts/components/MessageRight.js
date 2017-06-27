import React from 'react';

class MessageRight extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.msgSlide.classList.add('-show')
    }, 10)
  }

  render() {
    const { text } = this.props
    return(
      <div className="message message-right" ref={(msgSlide) => this.msgSlide = msgSlide}>
        <p>{ text }</p> 
      </div>
    )
  }
}

export default MessageRight;