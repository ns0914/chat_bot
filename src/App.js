import React from 'react'
import ChatBot from 'react-simple-chatbot'
import {Segment} from 'semantic-ui-react'

const App = () => {

  const steps = [

    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "Order", label: "Order", trigger: "Order"},
        { value: "Return", label: "Return", trigger: "Return" },
      ],
    },
    {
      id: "Order",
      message:
        "Thanks for letting your Order issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Return",
      message:
        "Thanks for letting your Return issue, Our team will resolve your issue ASAP",
      end: true,
    },

  ]; 

  return (
    <>
      <Segment floated="center">
        <ChatBot steps={steps} />
      </Segment>
    </>
  )
}

export default App