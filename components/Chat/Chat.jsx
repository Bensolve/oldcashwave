import React, { useState, useEffect } from 'react';
import { View, Text, Platform, KeyboardAvoidingView, Image } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const CustomHeader = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, marginTop: 30 , justifyContent:'center'}}>
    {/* PNG Icon from images folder */}
    <Image
      source={require('../../assets/images/chatbot.png')} // Update the path accordingly
      style={{ width: 30, height: 50, marginRight: 20 ,}}
    />
    {/* Header Text */}
    <Text style={{ color: 'orange', fontSize: 28, fontWeight: 'bold' }}>
      Bot Cashwave
    </Text>
  </View>
);

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native Chatbot',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const generateBotReply = (userMessage) => {
    // Example: A simple bot reply echoing the user's message
    return {
      _id: Math.random(),
      text: `You said: ${userMessage.text}`,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native Chatbot',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
  };

  const onSend = (newMessages = []) => {
    const userMessage = {
      ...newMessages[0],
      user: {
        _id: 1,
      },
      createdAt: new Date(),
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [userMessage])
    );

    // Use the generateBotReply function to create a bot reply
    const botReply = generateBotReply(userMessage);

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [botReply])
    );
  };

  const renderBubble = (props) => {
     const { currentMessage } = props;
    return (
      <View>
        
     
        {/* Bubble Component */}
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#FFA500', // Orange background for user messages
            },
            left: {
              backgroundColor: 'white', // White background for bot messages
            },
          }}
          textStyle={{
            right: {
              color: 'white', // White text color for user messages
            },
            left: {
              color: 'black', // Black text color for bot messages
            },
          }}
        />

<Image
          source={require('../../assets/images/chatbot.png')} // Update the path accordingly
          style={{ width: 20, height: 30, tintColor: 'orange' }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;
