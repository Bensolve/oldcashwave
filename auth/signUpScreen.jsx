import { Button, Card, TextInput, useTheme, IconButton } from 'react-native-paper';
import { View, Text } from 'react-native';
import * as React from 'react';
import { styles } from './Sign';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the import path based on your project structure


const SignUpScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);


  const { colors } = useTheme();
  const navigation = useNavigation();



  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Successfully signed up!
      navigation.navigate('Home');
      console.log('User signed up:', userCredential.user.email);
    } catch (error) {
      // Handle error
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setErrorMessage('Email already in use. Please use another email.');
      } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setErrorMessage('The password is too weak. Please choose a stronger password.');
      } else {
        setErrorMessage('An error occurred during sign-up. Please try again later.');
      }
    }
  };
  
  const navigateToSignIn = () => {
    navigation.navigate('Sign In');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.card} >
      <Card style={styles.container}>
        <Card.Content>
          <Card.Cover source={require('../assets/images/logo.png')} resizeMode="stretch" />
          <Card.Title>Sign Up</Card.Title>
          <Card style={styles.Inputs}>
            <TextInput
              label="Email"
              style={styles.email}
              theme={{ colors: { primary: colors.primary } }}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.password}
              label="Password"
              secureTextEntry={!passwordVisible}
              right={<TextInput.Icon icon = {passwordVisible ? icon='eye' : icon='eye-off'}
              onPress = {togglePasswordVisibility}  
             />}
              theme={{ colors: { primary: colors.primary } }}
              onChangeText={(text) => setPassword(text)}
              
            />
     
          </Card>
          {errorMessage && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <Card.Actions>
            <Button
              style={styles.button}
              theme={{ colors: { primary: colors.accent } }}
              onPress={handleSignUp}
            >
              Sign Up
            </Button>
          </Card.Actions>
          <Card.Actions>
            <Text style={styles.label}>Have an account? </Text>
            <Button
              style={styles.signUp}
              onPress={navigateToSignIn}
            >
              Sign In
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </View>

  );
};

export default SignUpScreen;
