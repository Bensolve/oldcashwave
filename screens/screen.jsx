import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import HomePage from './main/HomePage';
import TaskPage from './main/TaskPage';
import ChatBot from './main/ChatBot';
const Tab = createBottomTabNavigator();


const Screen = () => {
    return (
        <View style={{flex:1}}>
        {/* <StatusBar barStyle="dark-content" backgroundColor="#000"   /> */}

        <Tab.Navigator
            screenOptions={{headerShown:false, headerStyle:{backgroundColor:"grey"}}}
        
        >
            <Tab.Screen name="Home" component={HomePage} 
                options={{  headerTitle: "",}}
            />
            <Tab.Screen name="Task" component={TaskPage} 
            />
                        
            <Tab.Screen name="Chatbot" component={ChatBot}
                 options={{  headerTitle: "Bot Cashwave",}}
            />
        </Tab.Navigator>

        </View>
    );
};

export default Screen;