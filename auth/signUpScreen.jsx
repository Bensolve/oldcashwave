import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { styles } from './Sign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the import path based on your project structure
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [countryCode, setCountryCode] = useState('+233');
  const [selectedCountry, setSelectedCountry] =
    useState(null);
  const [countryPickerVisible, setCountryPickerVisible] =
    useState(false);



  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };




  const navigation = useNavigation();

  const handlePhoneNumberChange = (number) => {
    // If the dial code is removed, clear the phone number.
    setPhoneNumber(number);
  };



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
    navigation.navigate('SignIn');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const textStyle = {
    color: '#fff',


  };
  const textProps = {
    keyboardType: 'numeric',
    autoCapitalize: 'none',

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
              <Text style={styles.headtitle}>Sign Up</Text>
            </View>

          </View>
        </View>
          <View style={styles.up}>


           

            <View style={styles.upform}>

              <View style={styles.inputView}>
                <TextInput

                  style={styles.emailinputText}
                  placeholder="Enter your Email"
                  placeholderTextColor="#eaeaea"
                  onChangeText={text => setEmail({ email: text })}
                />
              </View>



              <View style={styles.inputView}>

                <View style={styles.roll}>
                  <TextInput
                    style={styles.passwordinputText}
                    secureTextEntry={!passwordVisible}
                    placeholder="Enter Your Password"
                    placeholderTextColor="#eaeaea"
                    onChangeText={text => setPassword({ password: text })}


                  />
                  <MaterialCommunityIcons
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    style={styles.icon}
                    onPress={togglePasswordVisibility}
                  />
                </View>
              </View>

              <View style={styles.inputView}>

                <View style={styles.roll}>
                  <TextInput
                    style={styles.passwordinputText}
                    secureTextEntry={!passwordVisible}
                    placeholder="Confirm Password"
                    placeholderTextColor="#eaeaea"
                    onChangeText={text => setConfirmPassword({ confirmPassword: text })}
                  />
                  <MaterialCommunityIcons
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    style={styles.icon}
                    onPress={togglePasswordVisibility}
                  />
                </View>
              </View>

              <View style={styles.inputView}>
                <TextInput
                  label="Email Address"
                  style={styles.emailinputText}
                  placeholder="Invitation Code"
                  placeholderTextColor="#eaeaea"
                  onChangeText={text => setState({ email: text })}
                />
              </View>

              <View style={styles.inputView}>

                <TextInput

                  style={styles.emailinputText}
                  placeholder="Generate Unique code"
                  placeholderTextColor="#eaeaea"
                  onChangeText={text => setState({ email: text })}
                />
              </View>



              <View>
                <Text>I agree to terms and conditions</Text>
              </View>

              {errorMessage && (
                <Text style={styles.errorText}>{errorMessage}</Text>
              )}

              <View>
                <TouchableOpacity
                  style={styles.atn}
                  onPress={handleSignUp}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>

                <View>

                  <TouchableOpacity
                    style={{ marginTop: 'auto' }}
                    onPress={navigateToSignIn}>
                    <Text style={styles.formFooter}>
                      Have an account?
                      <Text style={{ color: 'orange' }}> Sign In</Text>
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

export default SignUpScreen;
