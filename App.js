import React from 'react';
import SignUpScreen from './auth/signUpScreen';
import { PaperProvider } from 'react-native-paper';
import SignInScreen from './auth/signInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}



export default App;