import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import * as React from 'react';
import { styles } from './Sign';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from '../firebaseConfig'; // Adjust the import path based on your project structure



const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // Add state for error messages
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();




  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Successfully signed in!
      console.log('User signed in:', userCredential.user.email);
      navigation.navigate("Home");
    } catch (error) {
      // Handle error
      console.error('Sign-in failed:', error.message);
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
    <SafeAreaView style={styles.card}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 1, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >

        <View style={styles.header}>
          <View style={styles.headerImg}>
            <Image
              source={require('../assets/images/logo1.png')}
              style={styles.logo}

            />
            <View style={styles.title}>
              <Text style={styles.headtitle}>Sign In</Text>
            </View>

          </View>

        </View>
        <View style={styles.up}>

         <View style={styles.upform}>

            <View style={styles.inputView}>

              <TextInput
                label="Email Address"
                style={styles.emailinputText}
                placeholder="Enter your Email"
                placeholderTextColor="#eaeaea"
                onChangeText={text => setEmail(text)}

              />
            </View>


            <View style={styles.inputView}>

              <View style={styles.roll}>
                <TextInput
                  style={styles.passwordinputText}
                  secureTextEntry={!passwordVisible}
                  placeholder="Enter Your Password"
                  placeholderTextColor="#eaeaea"
                  onChangeText={text => setPassword(text)}



                />
                <MaterialCommunityIcons
                  name={passwordVisible ? 'eye' : 'eye-off'}
                  style={styles.icon}
                  onPress={togglePasswordVisibility}
                />
              </View>
            </View>


{/* 
            <View>
              <Text>I agree to terms and conditions</Text>
            </View> */}

            {errorMessage && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}

            <View>
              <TouchableOpacity
                style={styles.atn}
                onPress={handleSignIn}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>

              <View>

                <TouchableOpacity
                  style={{ marginTop: 'auto' }}
                  onPress={navigateToSignUp}>
                  <Text style={styles.formFooter}>
                    Don't have an account?
                    <Text style={{ color: 'orange' }}> Sign Up</Text>
                  </Text>

                </TouchableOpacity>
              </View>
            </View>







          </View>
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>


  );
};


export default SignInScreen;
