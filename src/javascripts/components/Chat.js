import React from 'react'
import ChatBoxSettings from './ChatBoxSettings'
import ChatBox from './ChatBox'
import ChatInput from './ChatInput'
import { resMsgs } from '../helper'

class Chat extends React.Component {
  constructor() {
      super()
      this.state = {
        messages: [
          {
            user: "blue",
            message: "blah blah blah"
          }, 
          {
            user: "yellow",
            message: "Lorem ipsum dipsum"
          },
          {
            user: "yellow",
            message: "Hallo lorem"
          }
        ]
      }
  }  

  componentWillMount() {
    const localStorageRef = localStorage.getItem(`messages`)  
    if(localStorageRef) {
      this.setState({
        messages: JSON.parse(localStorageRef)
      })
    }
  }

  componentDidMount() {
    const chatbox = document.querySelector('.chatbox')
    chatbox.scrollTo(0, chatbox.scrollHeight)
  }

  componentDidUpdate(prevProps, prevState) {
    const chatbox = document.querySelector('.chatbox')
    chatbox.scrollTo(0, chatbox.scrollHeight)
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`messages`, JSON.stringify(nextState.messages))
  }

  addMessages = (text) => {

    const newMsg = {
      user: "blue",
      message: text
    }

    const newMessages = this.state.messages
    newMessages.push(newMsg)
    this.setState({ messages: newMessages })
    const randNum = Math.floor(Math.random() * 3000) + 200

    const resMsgs = [
        {
            user: "yellow",
            message: "Waddup"
        },
        {
            user: "yellow",
            message: "Insert meme here"
        },
        {
            user: "yellow",
            message: "You're so funny!"
        },
        {
            user: "yellow",
            message: "So... the weather today?"
        },
        {
            user: "yellow",
            message: "Ding Dong Diddly Doo I'm rhyming words and singing to you."
        },
        {
            user: "yellow",
            message: "Mathmatical!"
        },
        {
            user: "yellow",
            message: "How are you today?"
        },
        {
            user: "yellow",
            message: "Hahahaha"
        },
        {
            user: "yellow",
            message: "I pronounce 'memes' like 'me' 'mees'"
        },
        {
            user: "yellow",
            message: "That makes a lot of sense!"
        },
        {
            user: "yellow",
            message: "Diddly doo, this rhymes with poo and you."
        },
        {
            user: "yellow",
            message: "Rocket Racoon rams rockets rinto rhis rpockets"
        }
      ]
      setTimeout( () => {
        newMessages.push(resMsgs[Math.floor(Math.random() * resMsgs.length)])
        this.setState({ messages: newMessages })
      }, randNum)
  }

  render() {
    return (
        <div className='container'>
          <ChatBoxSettings />
          <ChatBox messages={this.state.messages} params={this.props.params.messageId} />
          <ChatInput onSubmit={this.addMessages}/>
        </div>
    )
  }
}

export default Chat
