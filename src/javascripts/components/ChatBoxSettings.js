import React from 'react'
import MoreSettings from './MoreSettings'

class ChatBoxSettings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="chat__header">
        <p>Ask Carroll</p>
        <img src="./images/caret-down.svg" className={this.props.classname} onClick={this.props.onClick} />
      </header>
    )
  }
}

export default ChatBoxSettings
