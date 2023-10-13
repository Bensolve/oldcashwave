import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const recentItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const [currentUser, setCurrentUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth(); // Get the Firebase Auth object

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // No user is signed in
        setCurrentUser(null);
      }
    });

    return () => {
      // Unsubscribe from the Firebase observer when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Successfully signed out
        navigation.navigate('SignIn'); // Navigate back to the sign-in page
      })
      .catch((error) => {
        // Handle sign-out error
        console.error('Error signing out:', error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24 }}>
        {currentUser ? `Hello, ${currentUser.email || 'User'}` : 'Welcome to my app!'}
      </Text>

      <FlatList
        data={recentItems}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      <Button title="Search" onPress={() => { /* Redirect to the search page */ }} />
      {currentUser && (
        <Button title="Sign Out" onPress={handleSignOut} />
      )}
    </View>
  );
};

export default HomePage;
