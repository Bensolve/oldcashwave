export const COLORS = {
    primary: 'orange',
    secondary: 'black',
    accent: '#f2f2f2',
  }

  import React from 'react';
import SignUpScreen from './auth/signUpScreen';
import { PaperProvider } from 'react-native-paper';
import SignInScreen from './auth/signInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen}/>


          <Stack.Screen name="Home" component={HomePage} />
      
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}



export default App;