import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Me from '../../components/Settings/Me';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Me/>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});


export default Profile;
