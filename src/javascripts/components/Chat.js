import React from 'react';
import ChatBoxSettings from './ChatBoxSettings';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';

class Chat extends React.Component {
  constructor() {
      super()
      this.state = {
        open: true,
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

  addMessages = (text) => {
    const newMsg = {
      user: "blue",
      message: text
    }
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
    },
    ]
    const chatbox = document.querySelector('.chatbox')
    const newMessages = this.state.messages;
    newMessages.push(newMsg);

    console.log(chatbox.scrollHeight)
    newMessages.push(resMsgs[Math.floor(Math.random() * resMsgs.length)])
    chatbox.scrollTo(0, chatbox.scrollHeight)

    this.setState({ messages: newMessages })
  }

  render() {
    return (
        <div className='container'>
          <ChatBoxSettings />
          <ChatBox messages={this.state.messages}/>
          <ChatInput onSubmit={this.addMessages}/>
        </div>
      )
  }
}

export default Chat;
