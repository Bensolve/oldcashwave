import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Task from '../../components/Task/Task'

const TaskScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Task/>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});


export default TaskScreen;
