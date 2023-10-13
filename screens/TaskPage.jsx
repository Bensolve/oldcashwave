import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Task Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('HomePage')}
      />
    </View>
  );
};

export default TaskScreen;
