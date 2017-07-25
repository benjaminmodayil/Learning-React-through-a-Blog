import React from 'react'
import ChatBoxSettings from './ChatBoxSettings'
import ChatBox from './ChatBox'
import ChatInput from './ChatInput'
import resMsgs from '../helper'

class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          user: 'blue',
          message: 'blah blah blah'
        },
        {
          user: 'yellow',
          message: 'Lorem ipsum dipsum'
        },
        {
          user: 'yellow',
          message: 'Hallo lorem'
        }
      ],
      showChat: false
    }
  }

  componentWillMount() {
    const localStorageRef = localStorage ? localStorage.getItem('messages') : null
    if (localStorageRef) {
      this.setState({
        messages: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (localStorage) {
      localStorage.setItem(`messages`, JSON.stringify(nextState.messages))
    } else {
      null
    }
  }

  addResponse = () => {
    const randNum = Math.floor(Math.random() * 3000) + 200
    const newMessages = this.state.messages

    setTimeout(() => {
      newMessages.push(resMsgs[Math.floor(Math.random() * resMsgs.length)])
      this.setState({ messages: newMessages })
    }, randNum)
  }

  addMessage = text => {
    const newMsg = {
      user: 'blue',
      message: text
    }
    const newMessages = this.state.messages
    newMessages.push(newMsg)
    this.setState({ messages: newMessages })
    this.addResponse()
  }
  onClick = () => {
    this.setState({ showChat: !this.state.showChat })
    // alert(this.state.showChat)
  }
  isOpen = () => {
    return this.state.showChat ? 'show' : 'hide'
  }

  // {this.state.showChat ? alert('hi') : null}
  render() {
    return (
      <div className={`chat_container ${this.isOpen()}`}>
        <ChatBoxSettings onClick={this.onClick} />

        <ChatBox messages={this.state.messages} />
        {/*  params={this.props.params.messageId} 
      this was passed on ChatBox above as well, I don't think it's needed -you from the past */}
        <ChatInput onSubmit={this.addMessage} />
      </div>
    )
  }
}

export default Chat
