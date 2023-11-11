import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Profileheader from '../../components/Home/profileheader';
import ImageSlider from '../../components/Home/ImageSlider';
import PopularTask from '../../components/Home/popularTask';

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Profileheader />
      <ImageSlider />
      <PopularTask/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // marginTop: 20
  },
});

export default HomePage;
