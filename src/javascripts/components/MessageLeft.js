import React from 'react'

class MessageLeft extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.msgSlide.classList.add('-show')
    }, 10)
  }

  render() {
    const { text } = this.props
    return(
      <div className="message message-left" ref={(msgSlide) => this.msgSlide = msgSlide}>
        <p>{ text }</p> 
      </div>
    )
  }
}

export default MessageLeft
