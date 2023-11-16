import {  View, Text ,TextInput, FlatList,TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import styles from './Chat.style';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Example() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const generateBotReply = (userMessage) => {
    return {
      id: Math.random().toString(),
      text: `You said: ${userMessage}`,
      isUser: false,
    };
  };

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      id: Math.random().toString(),
      text: inputText,
      isUser: true,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');

    const botReply = generateBotReply(inputText);
    setMessages((prevMessages) => [...prevMessages, botReply]);
  };

  const renderItem = ({ item }) => (
    <View style={{ alignItems: item.isUser ? 'flex-end' : 'flex-start' }}>
      <View
        style={{
          backgroundColor: item.isUser ? '#FFA500' : 'white',
          padding: 10,
          borderRadius: 8,
          margin: 5,
        }}
      >
        <Text style={{ color: item.isUser ? 'white' : 'black' }}>{item.text}</Text>
      </View>

      {!item.isUser && (
       <Icon name="robot" size={24} color="orange" />
      )}
    </View>
  );

  return (
   
      <View style={styles.container}>
        <View style={styles.header}>
        <Icon name="robot" size={24} color="orange" />
         <Text style={styles.title}>Bot Cashwave</Text>
        </View>

        <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />

         <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          marginBottom: -140
        }}
      >
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, padding: 8, color: 'black', 
          backgroundColor: "white"
        }}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type a message..."
          placeholderTextColor={'black'}
        />
        <TouchableOpacity onPress={handleSend} style={{ marginLeft: 10 }}>
        <Icon name="send" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      {Platform.OS === 'ios' && <KeyboardAvoidingView behavior="padding" />}
          

       
      </View>
   
  );
}

