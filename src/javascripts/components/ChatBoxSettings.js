import React from 'react'
import MoreSettings from './MoreSettings'

class ChatBoxSettings extends React.Component {
  constructor(props) {
    super(props)
  }
  isActive = value => {
    if (value === true) {
      if (this.state.showChat === true) {
        this.setState.showChat === false
        alert(this.state.showChat)
        return 'inactive'
      }
    } else if (value === true) {
      if (this.state.showChat === false) {
        this.setState.showChat === true
        alert(this.state.showChat)
        return 'active'
      }
      return value === this.state.showChat ? 'active' : 'inactive'
    }
  }
  // this.isActive('')
  render() {
    return (
      <header className="chat__header">
        <p>Ask Carroll</p>
        <img src="./images/caret-down.svg" className={this.props.name} onClick={this.props.onClick} />
      </header>
    )
  }
}

export default ChatBoxSettings
