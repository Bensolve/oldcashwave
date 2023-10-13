import React, { useState, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage';
import TaskPage from './screens/TaskPage';
import SignUpScreen from './auth/signUpScreen';
import SignInScreen from './auth/signInScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase Auth functions

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(); // Get the Firebase Auth object

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, set the user state
        setUser(authUser);
      } else {
        // User is not signed in, set the user state to null
        setUser(null);
      }
    });

    // Unsubscribe from the Firebase observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        {user ? (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Task" component={TaskPage} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
