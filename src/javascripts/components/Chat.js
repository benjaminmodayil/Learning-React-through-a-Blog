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
      ]
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

  render() {
    return (
      <div className="container">
        <ChatBoxSettings />
        <ChatBox messages={this.state.messages} params={this.props.params.messageId} />
        <ChatInput onSubmit={this.addMessage} />
      </div>
    )
  }
}

export default Chat
