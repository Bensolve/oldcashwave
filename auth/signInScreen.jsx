import { Button, Card, TextInput, } from 'react-native-paper';
import { View, Text} from 'react-native';
import * as React from 'react';
import { styles } from './Sign';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the import path based on your project structure



const SignInScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null); // Add state for error messages
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigation = useNavigation();


  

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Successfully signed in!
      console.log('User signed in:', userCredential.user.email);
      navigation.navigate("Home");
    } catch (error) {
      // Handle error
      setErrorMessage('Sign-in failed. Please check your credentials.');
    }
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
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
          
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.password}
              label="Password"
              secureTextEntry={!passwordVisible}
              right={<TextInput.Icon icon = {passwordVisible ? icon='eye' : icon='eye-off'}
              onPress = {togglePasswordVisibility}  
             />}
              
              onChangeText={(text) => setPassword(text)}
              
            />
     
          </Card>
          {errorMessage && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <Card.Actions>
            <Button
              style={styles.button}
             
              onPress={handleSignIn}
            >
              Sign In
            </Button>
          </Card.Actions>
          <Card.Actions>
            <Text style={styles.label}>Have an account? </Text>
            <Button
              style={styles.signUp}
              onPress={navigateToSignUp }
            >
              Sign Up
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
   </View>
  );
};

export default SignInScreen;
