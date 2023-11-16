import {SafeAreaView,StyleSheet } from 'react-native'
import Chat from '../../components/Chat/Chat'
import React from 'react'

const ChatBot = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Chat/>
  </SafeAreaView>
  )
}

export default ChatBot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
