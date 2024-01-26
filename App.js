import React, { useState, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './screens/screen';
import SignUpScreen from './auth/signUpScreen';
import SignInScreen from './auth/signInScreen';
import LoadingScreen from './auth/loadingScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Stack = createStackNavigator();


// ... (imports)

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setLoading(false); // Set loading to false once the authentication state is determined
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // You can show a loading screen here
    return <LoadingScreen />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <Stack.Screen name="Screen" component={Screen} />
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
