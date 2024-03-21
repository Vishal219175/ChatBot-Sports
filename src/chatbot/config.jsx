// src/chatbot/config.jsx
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import CricketSearch from '../components/CricketSearch';

const config = {
  botName: 'CricketBot',
  initialMessages: [
    createChatBotMessage(`Hello. How may I help you?`, {
      widget: 'options',
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(60 80 181)',
    },
    chatButton: {
      backgroundColor: 'rgb(60 80 181)',
    },
  },
  widgets: [
    {
      widgetName: 'cricketSearch',
      widgetFunc: (props) => <CricketSearch {...props} />, 
    },
  ],
};

export default config;
