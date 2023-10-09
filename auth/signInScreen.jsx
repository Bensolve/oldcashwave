import { Button,Card, TextInput, useTheme } from "react-native-paper";
import {View} from 'react-native';
import * as React from 'react';
import { styles } from "./Sign";
import {useNavigation} from '@react-navigation/native'
import SignUpScreen from "./signUpScreen";

const SignInScreen = () => {
    const [text, setText] = React.useState('');
    const { colors} = useTheme();
    const navigation = useNavigation();

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
        // navigation.navigate={SignUpScreen};
    };

    return (
        <View style={styles.card} >
            <Card style={styles.container}>
                <Card.Content>
                    <Card.Cover source={require('../assets/images/logo.png')} />
                    <Card.Title>Sign In</Card.Title>
                    <Card style={styles.Inputs}>
                        <TextInput
                            label="Email"
                            style={styles.email}
                            theme={{ colors: { primary: colors.primary}}}
                        />
                        <TextInput
                            style={styles.password}
                            label="Password"
                            secureTextEntry
                            right = {<TextInput.Icon icon='eye'/>}
                            theme={{colors: {primary: colors.primary}}}
                        />
                    </Card>
                    <Card.Actions>
                        <Button
                            style={styles.button}
                            theme={{colors: {primary: colors.primary}}}
                            // onPress={handleSignIn}
                        >
                            Sign In
                        </Button>
                      
                    </Card.Actions>
                    <Button 
                            style={styles.signUp}
                            onPress={navigateToSignUp}
                        >
                            Sign Up
                        </Button>
                </Card.Content>
            </Card>
        </View>
    )
}

export default SignInScreen;